import { IconName } from '@grafana/ui';
import { ReactNode } from 'react';

export interface LabeledFieldProps {
  label: ReactNode;
  tooltipText?: string;
  tooltipLink?: string;
  tooltipLinkText?: string;
  tooltipIcon?: IconName;
  tooltipDataTestId?: string;
  tooltipLinkTarget?: string;
}