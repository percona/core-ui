import { IconName } from '@grafana/ui';

export interface LabeledFieldProps {
  label: string;
  tooltipText?: string;
  tooltipLink?: string;
  tooltipLinkText?: string;
  tooltipIcon?: IconName;
  tooltipDataTestId?: string;
  tooltipLinkTarget?: string;
}