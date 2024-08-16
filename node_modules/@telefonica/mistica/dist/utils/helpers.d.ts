/** These functions are copies of the ones located in webapp packages */
type Debounced<T> = T & {
    cancel: () => void;
    flush: () => void;
};
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked. The debounced function
 * comes with a cancel method to cancel delayed func invocations and a flush method to immediately
 * invoke them. The func is invoked with the last arguments provided to the debounced function.
 * Subsequent calls to the debounced function return the result of the last func invocation.
 */
export declare const debounce: <T extends (...args: Array<any>) => any>(func: T, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}) => Debounced<T>;
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 */
export declare const isEqual: (a: unknown, b: unknown) => boolean;
export {};
