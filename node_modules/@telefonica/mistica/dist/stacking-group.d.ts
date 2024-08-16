import * as React from 'react';
type Props = {
    stacked?: boolean;
    moreItemsStyle: {
        type: 'circle' | 'square';
        size: number;
    };
    maxItems?: number;
    children: React.ReactNode;
};
declare const StackingGroup: React.FC<Props>;
export default StackingGroup;
