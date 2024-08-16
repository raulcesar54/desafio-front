import type { Theme } from '../theme';
export declare const isInsideNovumNativeApp: (platformOverrides?: Theme['platformOverrides']) => boolean;
export declare const isRunningAcceptanceTest: (platformOverrides?: Theme['platformOverrides']) => boolean;
export declare const isAndroid: (platformOverrides: Theme['platformOverrides']) => boolean;
export declare const isIos: (platformOverrides: Theme['platformOverrides']) => boolean;
/**
 * Returns true if the browser is a safari browser:
 * webview, mobile, desktop or a browser like Chrome for iOS which is just a safari with a skin
 *
 * Note that this function checks the navigator vendor. It doesn't use platformOverrides or userAgent.
 */
export declare const isSafari: () => boolean;
export declare const isFirefox: (platformOverrides?: Theme['platformOverrides']) => boolean;
export declare const isChrome: (platformOverrides: Theme['platformOverrides']) => boolean;
export declare const getIosVersion: (platformOverrides: Theme['platformOverrides']) => string;
export declare const getPlatform: (platformOverrides?: Theme['platformOverrides']) => 'ios' | 'android' | 'desktop';
