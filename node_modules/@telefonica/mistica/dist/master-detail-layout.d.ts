import * as React from 'react';
type Props = {
    isOpen: boolean;
    master: React.ReactNode;
    detail?: React.ReactNode;
    children?: void;
};
declare const MasterDetailLayout: React.FC<Props>;
export default MasterDetailLayout;
