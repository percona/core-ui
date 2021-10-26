import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { LinkTooltip, LinkTooltipProps } from '../LinkTooltip';
import { getStyles } from './Label.styles';

export interface LabelProps extends LinkTooltipProps {
  name: string;
  label?: string;
  inputId: string;
  required?: boolean;
}

export const Label: FC<LabelProps> = ({
  name,
  label,
  inputId,
  tooltipText,
  required = false,
  ...linkTooltipProps
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return label ? (
    <div className={styles.labelWrapper}>
      <label className={styles.label} htmlFor={inputId} data-testid={`${name}-field-label`}>
      {`${label}${required ? ' *' : ''}`}
      </label>
      {tooltipText && <LinkTooltip tooltipText={tooltipText} {...linkTooltipProps} />}
    </div>
  ) : null;
};
