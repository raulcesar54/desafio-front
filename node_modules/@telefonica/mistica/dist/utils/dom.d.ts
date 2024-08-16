import type { DataAttributes } from './types';
/**
 * Returns true if provided type is supported <input> type
 */
export declare const isInputTypeSupported: (type: string) => boolean;
export declare const cancelEvent: (event: Event | React.SyntheticEvent) => void;
export declare const createChangeEvent: (target: HTMLInputElement, value: string) => React.ChangeEvent<HTMLInputElement>;
export declare const addPassiveEventListener: (el: EventTarget, eventName: string, listener: (e: any) => void) => void;
export declare const removePassiveEventListener: (el: EventTarget, eventName: string, listener: (e: any) => void) => void;
/**
 * Prefixes given attributes with `data-`
 *
 * For example: `{foo: 'bar'}` => `{data-foo: 'bar'}`
 */
export declare const getPrefixedDataAttributes: (attrs?: DataAttributes, componentName?: string) => DataAttributes;
type ScrollAxis = 'X' | 'Y';
export declare const getScrollableParentElement: (el?: HTMLElement | null, axis?: ScrollAxis) => HTMLElement;
export declare const getScrollDistanceToBottom: (el: HTMLElement) => number;
export declare const hasScroll: (el: HTMLElement) => boolean;
type ResizeListener = (entries: Array<ResizeObserverEntry>, observer: ResizeObserver) => void;
export declare const listenResize: (element: Element, handler: ResizeListener) => (() => void);
export declare const isCssVar: (cssVar: string) => boolean;
export declare const getCssVarValue: (cssVar: string, element?: Element) => string;
export {};
