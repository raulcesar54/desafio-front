import * as React from 'react';
export type ScreenSizeContextType = Readonly<{
    isMobile: boolean;
    isTablet: boolean;
    isTabletOrBigger: boolean;
    isTabletOrSmaller: boolean;
    isDesktopOrBigger: boolean;
    isLargeDesktop: boolean;
}>;
declare const ScreenSizeContext: React.Context<Readonly<{
    isMobile: boolean;
    isTablet: boolean;
    isTabletOrBigger: boolean;
    isTabletOrSmaller: boolean;
    isDesktopOrBigger: boolean;
    isLargeDesktop: boolean;
}>>;
export default ScreenSizeContext;
