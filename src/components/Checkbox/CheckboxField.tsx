import React, { FC, useMemo, ReactNode } from 'react';
import { Field, UseFieldConfig, FieldMetaState, FieldInputProps } from 'react-final-form';
import { useStyles } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Checkbox.styles';
import { Validator, compose } from '../../shared/validators';
import { FieldInputAttrs } from '../../shared/types';

export interface CheckboxProps extends UseFieldConfig<boolean> {
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldInputAttrs;
  label?: string | ReactNode;
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
            {label && (
            <span className={styles.label} data-testid={`${name}-field-label`}>
              {label}
            </span>
            )}
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
