import * as React from 'react';
import type { AlertProps, ConfirmProps, ExtendedDialogProps } from './dialog';
export declare const useDialog: () => {
    alert: (params: AlertProps) => void;
    confirm: (params: ConfirmProps) => void;
    dialog: (params: ExtendedDialogProps) => void;
};
/**
 * @deprecated Use useDialog to get this function
 */
export declare const alert: (params: AlertProps) => void;
/**
 * @deprecated Use useDialog to get this function
 */
export declare const confirm: (params: ConfirmProps) => void;
/**
 * @deprecated Use useDialog to get this function
 */
export declare const dialog: (params: ExtendedDialogProps) => void;
type DialogRootProps = {
    children?: React.ReactNode;
};
export declare const DialogRoot: ({ children }: DialogRootProps) => JSX.Element;
export {};
