import * as React from 'react';
export declare const useIsDismissable: () => boolean;
type MaybeDismissableProps = {
    children: React.ReactNode;
    onClose?: () => void;
    width?: string | number;
    'aria-label'?: string;
    isOverMedia?: boolean;
    isInverse?: boolean;
};
declare const MaybeDismissable: ({ children, width, onClose, "aria-label": ariaLabel, isOverMedia, isInverse, }: MaybeDismissableProps) => JSX.Element;
export default MaybeDismissable;
