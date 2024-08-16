/**
 * Do not use this component!
 * Use DateField or FormDateTimeField
 *
 * This component is a fallback for browsers that don't support datetime-local or date inputs
 */
import * as React from 'react';
import 'moment/locale/es';
import 'moment/locale/de';
import 'moment/locale/pt-br';
import 'moment/locale/en-gb';
import type { CommonFormFieldProps } from './text-field-base';
import type Moment from 'moment';
export interface DateTimePickerProps extends CommonFormFieldProps {
    inputRef: (field: HTMLInputElement | null) => void;
    isValidDate?: (currentDate: Moment.Moment, selectedDate: Moment.Moment) => boolean;
    withTime?: boolean;
    mode?: 'year-month';
}
declare const DateTimePicker: React.FC<DateTimePickerProps>;
export default DateTimePicker;
