import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type AspectRatio = '1:1' | '16:9' | '4:3';
export declare const RATIO: {
    '1:1': number;
    '16:9': number;
    '4:3': number;
};
type VideoSourceWithType = {
    src: string;
    type?: string;
};
export type VideoSource = string | ReadonlyArray<string> | VideoSourceWithType | ReadonlyArray<VideoSourceWithType>;
export type VideoProps = {
    /** defaults to 100% when no width and no height are given */
    width?: string | number;
    height?: string | number;
    /** defaults to 0 (original video proportions). If both width and height are given, aspectRatio is ignored.  */
    aspectRatio?: AspectRatio | number;
    /** accepts multiple sources */
    src: VideoSource;
    /** defaults to true */
    loop?: boolean;
    /** defaults to true */
    muted?: boolean;
    /** defaults to when-loaded. If set to true, behaviour is the same as when the value is equal to when-loaded */
    autoPlay?: boolean | 'streaming' | 'when-loaded';
    /** defaults to 10s */
    loadingTimeout?: number;
    onError?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onLoad?: () => void;
    poster?: string;
    children?: void;
    /** defaults to none */
    preload?: 'none' | 'metadata' | 'auto';
    dataAttributes?: DataAttributes;
};
export interface VideoElement extends HTMLDivElement {
    play: () => Promise<void>;
    pause: () => void;
    load: () => void;
    /** Stops the video and shows the poster image (if available) */
    stop: () => void;
    setCurrentTime: (time: number) => void;
}
declare const Video: React.ForwardRefExoticComponent<VideoProps & React.RefAttributes<VideoElement>>;
export default Video;
