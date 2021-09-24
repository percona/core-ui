import React, { FC, useMemo, ReactNode } from 'react';
import { Field, FieldMetaState, FieldInputProps, UseFieldConfig } from 'react-final-form';
import { cx } from 'emotion';
import { useStyles } from '@grafana/ui';
import { Validator, compose } from '../../shared/validators';
import { getStyles } from './TextareaInput.styles';
import { FieldTextareaAttrs } from '../../shared/types';

/**
 * Note: the validation error message will be displayed once the the input has been modified.
 * To show the error message on blur you have to pass `showErrorOnBlur`.
 */
export interface TextareaInputFieldProps extends UseFieldConfig<string> {
  className?: string;
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldTextareaAttrs;
  label?: string | ReactNode;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  resize?: 'vertical' | 'horizontal' | 'both';
  showErrorOnBlur?: boolean;
  validators?: Validator[];
}

interface TextareaFieldRenderProps {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
}

export const TextareaInputField: FC<TextareaInputFieldProps> = React.memo(
  ({
    className,
    disabled = false,
    fieldClassName,
    inputProps,
    label,
    name,
    placeholder,
    required = false,
    resize = 'vertical',
    rows = 5,
    showErrorOnBlur = false,
    validators,
    ...fieldConfig
  }) => {
    const styles = useStyles(getStyles);
    const inputId = `input-${name}-id`;
    const validate = useMemo(() => (Array.isArray(validators) ? compose(...validators) : undefined), [
      validators,
    ]);

    return (
      <Field {...fieldConfig} name={name} validate={validate}>
        {({ input, meta }: TextareaFieldRenderProps) => {
          const validationError = ((!showErrorOnBlur && meta.modified) || meta.touched) && meta.error;

          return (
            <div className={cx(styles.field, fieldClassName)} data-testid={`${name}-field-container`}>
              {label && (
                <label className={styles.label} htmlFor={inputId} data-testid={`${name}-field-label`}>
                  {`${label}${required ? ' *' : ''}`}
                </label>
              )}
              <textarea
                id={inputId}
                {...input}
                {...inputProps}
                rows={rows}
                disabled={disabled}
                placeholder={placeholder}
                data-testid={`${name}-textarea-input`}
                className={cx(
                  styles.input,
                  { invalid: !!validationError, [resize]: resize !== 'both' },
                  className,
                )}
              />
              <div data-testid={`${name}-field-error-message`} className={styles.errorMessage}>
                {validationError}
              </div>
            </div>
          );
        }}
      </Field>
    );
  },
);

TextareaInputField.displayName = 'TextareaInputField';
