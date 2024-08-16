import * as React from 'react';
type ModalState = {
    isModalOpen: boolean;
};
declare const ModalContextProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useSetModalState: () => ((newModalState: Partial<ModalState>) => void);
export declare const useSetModalStateEffect: () => void;
export declare const useModalState: () => ModalState;
export default ModalContextProvider;
