/// <reference types="react" />
type Props = {
    isLoading?: boolean;
    onCloseStart?: () => void;
    onCloseEnd?: () => void;
};
declare const VivinhoLoadingAnimation: ({ isLoading, onCloseStart, onCloseEnd }: Props) => JSX.Element;
export default VivinhoLoadingAnimation;
