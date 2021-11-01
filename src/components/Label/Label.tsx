import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { LinkTooltip } from '../LinkTooltip';
import { getStyles } from './Label.styles';
import { LabeledFieldProps } from '../../shared/types';

export const Label: FC<LabeledFieldProps> = ({
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
