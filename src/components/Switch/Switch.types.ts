import { ReactNode } from 'react';
import { FieldInputProps, FieldMetaState, UseFieldConfig } from 'react-final-form';
import { IconName } from '@grafana/ui';
import { FieldInputAttrs } from '../../shared/types';
import { Validator } from '../../shared/validators';

export interface SwitchFieldRenderProps {
  input: FieldInputProps<string, HTMLInputElement>;
  meta: FieldMetaState<string>;
}

export interface SwitchFieldProps extends UseFieldConfig<boolean> {
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldInputAttrs;
  label?: string | ReactNode;
  name: string;
  validators?: Validator[];
  tooltip?: string;
  tooltipIcon?: IconName;
}
