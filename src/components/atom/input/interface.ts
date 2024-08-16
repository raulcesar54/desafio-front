import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
type MergeInputAndTextareaProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export interface InputProps extends MergeInputAndTextareaProps {
  mask?: string[];
  name: string;
  label?: string;
}
