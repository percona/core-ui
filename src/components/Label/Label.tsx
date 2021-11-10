import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { cx } from 'emotion';
import { LinkTooltip } from '../LinkTooltip';
import { getStyles } from './Label.styles';
import { LabeledFieldProps } from '../../shared/types';

export const Label: FC<LabeledFieldProps> = ({
  name,
  label,
  labelWrapperClassName,
  labelClassName,
  inputId,
  tooltipText,
  required = false,
  ...linkTooltipProps
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return label ? (
    <div className={cx(styles.labelWrapper, labelWrapperClassName)}>
      <label
        className={cx(styles.label, labelClassName)}
        htmlFor={inputId}
        data-testid={`${name}-field-label`}>
          {label}{required ? ' *' : ''}
      </label>
      {tooltipText && <LinkTooltip tooltipText={tooltipText} {...linkTooltipProps} />}
    </div>
  ) : null;
};
