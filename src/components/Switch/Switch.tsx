import React, { FC, useMemo } from 'react';
import { Field } from 'react-final-form';
import { cx } from 'emotion';
import { Switch, useStyles } from '@grafana/ui';
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
  validators,
  tooltipText = '',
  tooltipLink,
  tooltipLinkText,
  tooltipIcon,
  tooltipDataTestId,
  tooltipLinkTarget,
  ...fieldConfig
}) => {
  const styles = useStyles(getStyles);
  const inputId = `input-${name}-id`;
  const validate = useMemo(() => (Array.isArray(validators) ? compose(...validators) : undefined), [
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
            link={tooltipLink}
            linkText={tooltipLinkText}
            tooltipText={tooltipText}
            tooltipDataTestId={tooltipDataTestId}
            tooltipLinkTarget={tooltipLinkTarget}
            icon={tooltipIcon}
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
