import { IconName } from '@grafana/ui';
import { ReactNode } from 'react';

export interface LabelTooltipProps {
  tooltipText?: string;
  tooltipLink?: string;
  tooltipLinkText?: string;
  tooltipIcon?: IconName;
  tooltipDataTestId?: string;
  tooltipLinkTarget?: string;
}

export interface LabeledFieldProps extends LabelTooltipProps {
  label?: ReactNode;
  labelWrapperClassName?: string;
  labelClassName?: string;
  name: string;
  inputId?: string;
  required?: boolean;
}
