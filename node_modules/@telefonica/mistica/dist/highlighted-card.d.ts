import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { TouchableComponentProps } from './touchable';
import type { ButtonLink, NullableButtonElement } from './button';
import type { DataAttributes, HeadingType, RendersNullableElement, TrackingEvent } from './utils/types';
type TextProps = {
    title?: string;
    description: string;
} | {
    title: string;
    description?: string;
};
type CommonProps = TextProps & {
    titleAs?: HeadingType;
    titleLinesMax?: number;
    descriptionLinesMax?: number;
    imageUrl?: string;
    imageFit?: 'fit' | 'fill' | 'fill-center';
    imageAlt?: string;
    onClose?: () => void;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    isInverse?: boolean;
    children?: void;
    'aria-label'?: string;
    width?: string | number;
    dataAttributes?: DataAttributes;
};
type ButtonProps = CommonProps & {
    button: NullableButtonElement | RendersNullableElement<typeof ButtonLink> | undefined;
};
type TouchableCardProps = TouchableComponentProps<CommonProps>;
type Props = ExclusifyUnion<ButtonProps | TouchableCardProps>;
declare const HighlightedCard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default HighlightedCard;
