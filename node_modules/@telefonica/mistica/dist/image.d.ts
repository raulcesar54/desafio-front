import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes } from './utils/types';
type ImageErrorProps = {
    withIcon?: boolean;
    borderRadius?: string | number;
    className?: string;
    border?: boolean;
};
export declare const ImageError: React.ForwardRefExoticComponent<ImageErrorProps & React.RefAttributes<HTMLDivElement>>;
export type AspectRatio = '1:1' | '16:9' | '7:10' | '4:3' | undefined;
export declare const RATIO: {
    '1:1': number;
    '16:9': number;
    '7:10': number;
    '4:3': number;
};
type CommonImageProps = {
    src: string;
    srcSet?: string;
    /** defaults to empty string */
    alt?: string;
    children?: void;
    dataAttributes?: DataAttributes;
    noBorderRadius?: boolean;
    onError?: () => void;
    onLoad?: () => void;
    loadingFallback?: boolean;
    errorFallback?: boolean;
    border?: boolean;
};
type RectangularImageProps = {
    /** defaults to 0 (original image proportions). If both width and height are given, aspectRatio is ignored.  */
    aspectRatio?: AspectRatio | number;
    /** defaults to 100% when no width and no height are given */
    width?: string | number;
    height?: string | number;
    noBorderRadius?: boolean;
};
type CircularImageProps = {
    circular?: boolean;
} & ExclusifyUnion<{
    width?: string | number;
} | {
    height?: string | number;
}>;
type ImageProps = CommonImageProps & ExclusifyUnion<RectangularImageProps | CircularImageProps>;
export declare const ImageContent: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export default Image;
