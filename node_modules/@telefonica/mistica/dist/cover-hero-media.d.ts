import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { VideoElement, VideoSource } from './video';
export type ImageProps = {
    backgroundImage: string;
};
export type VideoProps = {
    backgroundVideo: VideoSource;
    poster?: string;
    backgroundVideoRef?: React.RefObject<VideoElement>;
};
export declare const CoverHeroMedia: ({ backgroundVideo, backgroundImage, poster, backgroundVideoRef, }: ExclusifyUnion<ImageProps | VideoProps>) => React.ReactElement;
