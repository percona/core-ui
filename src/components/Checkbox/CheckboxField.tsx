import React, { FC, useMemo } from 'react';
import { Field, UseFieldConfig, FieldMetaState, FieldInputProps } from 'react-final-form';
import { useStyles } from '@grafana/ui';
import { cx } from 'emotion';
import { Label } from '../Label';
import { getStyles } from './Checkbox.styles';
import { Validator, compose } from '../../shared/validators';
import { FieldInputAttrs, LabeledFieldProps } from '../../shared/types';

export interface CheckboxProps extends UseFieldConfig<boolean>, LabeledFieldProps {
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldInputAttrs;
  name: string;
  validators?: Validator[];
}

interface CheckboxFieldRenderProps {
  input: FieldInputProps<string, HTMLInputElement>;
  meta: FieldMetaState<string>;
}

export const CheckboxField: FC<CheckboxProps> = React.memo(({
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
      {({ input, meta }: CheckboxFieldRenderProps) => (
        <div className={cx(styles.field, fieldClassName)} data-testid={`${name}-field-container`}>
          <label className={styles.wrapper} htmlFor={inputId}>
            <input
              id={inputId}
              {...input}
              {...inputProps}
              disabled={disabled}
              data-testid={`${name}-checkbox-input`}
              className={styles.input}
            />
            <span className={styles.checkmark} />
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
          </label>
          <div data-testid={`${name}-field-error-message`} className={styles.errorMessage}>
            {meta.touched && meta.error}
          </div>
        </div>
      )}
    </Field>
  );
});

CheckboxField.displayName = 'CheckboxField';
