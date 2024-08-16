import * as React from 'react';
type Props = {
    hidden?: boolean;
    children: React.ReactNode;
};
export declare const DocumentVisibilityProvider: React.FC<Props>;
export declare const useDocumentVisibility: () => boolean;
export {};
