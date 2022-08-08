import React, { FC } from 'react';
import { useStyles2 } from '@grafana/ui';
import { cx } from '@emotion/css';
import { FieldInputAttrs, LabeledFieldProps } from 'shared/types';
import { getStyles } from './Checkbox.styles';
import { Label } from '../Label';

export interface BaseCheckboxProps extends FieldInputAttrs, LabeledFieldProps {
  inputId?: string;
  touched?: boolean;
  error?: string;
}

export const BaseCheckbox: FC<BaseCheckboxProps> = ({
  name,
  inputId = `input-${name}-id`,
  className,
  label,
  touched,
  error,
  tooltipText = '',
  tooltipLink,
  tooltipLinkText,
  tooltipIcon,
  tooltipLinkTarget,
  tooltipDataTestId,
  ...props
}) => {
  const styles = useStyles2(getStyles);

  return (
    <div className={cx(styles.field, className)} data-testid={`${name}-field-container`}>
      <label className={styles.wrapper} htmlFor={inputId}>
        <input
          id={inputId}
          type="checkbox"
          {...props}
          data-testid={`${name}-checkbox-input`}
          className={styles.input}
        />
        <span className={styles.checkmark} />
      </label>
      <Label
        name={name}
        label={label}
        labelWrapperClassName={styles.checkmarkLabel}
        labelClassName={styles.label}
        inputId={inputId}
        tooltipLink={tooltipLink}
        tooltipLinkText={tooltipLinkText}
        tooltipText={tooltipText}
        tooltipDataTestId={tooltipDataTestId}
        tooltipLinkTarget={tooltipLinkTarget}
        tooltipIcon={tooltipIcon}
      />
      <div data-testid={`${name}-field-error-message`} className={styles.errorMessage}>
        {touched && error}
      </div>
    </div>
  );
};

BaseCheckbox.displayName = 'Checkbox';
