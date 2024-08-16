/// <reference types="react" />
type SkeletonBaseProps = {
    width?: string | number;
    height?: string | number;
    radius?: string | number;
    className?: string;
    noBorderRadius?: boolean;
};
declare const SkeletonBase: ({ width, height, radius, className, noBorderRadius, }: SkeletonBaseProps) => JSX.Element;
export default SkeletonBase;
