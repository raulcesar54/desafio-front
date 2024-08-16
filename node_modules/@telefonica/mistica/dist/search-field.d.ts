import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface SearchFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    getSuggestions?: (value: string) => ReadonlyArray<string>;
}
declare const SearchField: React.ForwardRefExoticComponent<SearchFieldProps & React.RefAttributes<any>>;
export default SearchField;
