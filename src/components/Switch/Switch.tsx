import React, { FC, useMemo } from 'react';
import { Field } from 'react-final-form';
import { cx } from '@emotion/css';
import { Switch, useStyles2 } from '@grafana/ui';
import { compose } from '../../shared/validators';
import { SwitchFieldProps, SwitchFieldRenderProps } from './Switch.types';
import { getStyles } from './Switch.styles';
import { Label } from '../Label';

export const SwitchField: FC<SwitchFieldProps> = ({
  disabled,
  fieldClassName,
  inputProps,
  label,
  name,
  inputId = `input-${name}-id`,
  validators,
  tooltipText = '',
  tooltipLink,
  tooltipLinkText,
  tooltipIcon,
  tooltipDataTestId,
  tooltipLinkTarget,
  ...fieldConfig
}) => {
  const styles = useStyles2(getStyles);
  const validate = useMemo(() => (Array.isArray(validators) ? compose(validators) : undefined), [
    validators,
  ]);

  return (
    <Field<boolean> {...fieldConfig} type="checkbox" name={name} validate={validate}>
      {({ input, meta }: SwitchFieldRenderProps) => (
        <div className={cx(styles.field, fieldClassName)} data-testid={`${name}-field-container`}>
          <Label
            name={name}
            label={label}
            inputId={inputId}
            tooltipLink={tooltipLink}
            tooltipLinkText={tooltipLinkText}
            tooltipText={tooltipText}
            tooltipDataTestId={tooltipDataTestId}
            tooltipLinkTarget={tooltipLinkTarget}
            tooltipIcon={tooltipIcon}
          />
          <Switch
            css={{}}
            {...input}
            value={input.checked}
            disabled={disabled}
            data-testid={`${name}-switch`}
          />
          <div data-testid={`${name}-field-error-message`} className={styles.errorMessage}>
            {meta.touched && meta.error}
          </div>
        </div>
      )}
    </Field>
  );
};
