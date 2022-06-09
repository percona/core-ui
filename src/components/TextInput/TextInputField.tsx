import React, { FC, useMemo } from 'react';
import { Field, FieldMetaState, FieldInputProps, UseFieldConfig } from 'react-final-form';
import { cx } from 'emotion';
import { useStyles } from '@grafana/ui';
import { Label } from '../Label';
import { Validator, compose } from '../../shared/validators';
import { getStyles } from './TextInput.styles';
import { FieldInputAttrs, LabeledFieldProps } from '../../shared/types';

/**
 * Note: the validation error message will be displayed once the the input has been modified.
 * To show the error message on blur you have to pass `showErrorOnBlur`.
 */
export interface TextInputFieldProps extends UseFieldConfig<string>, LabeledFieldProps {
  className?: string;
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldInputAttrs;
  placeholder?: string;
  showErrorOnBlur?: boolean;
  showErrorOnRender?: boolean;
  validators?: Validator[];
}

interface TextFieldRenderProps {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
}

export const TextInputField: FC<TextInputFieldProps> = React.memo(
  ({
    className,
    disabled = false,
    fieldClassName,
    inputProps,
    label,
    name,
    inputId = `input-${name}-id`,
    placeholder,
    required = false,
    showErrorOnBlur = false,
    showErrorOnRender = false,
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
    const validate = useMemo(() => (Array.isArray(validators) ? compose(...validators) : undefined), [
      validators,
    ]);

    return (
      <Field {...fieldConfig} type="text" name={name} validate={validate}>
        {({ input, meta }: TextFieldRenderProps) => {
          const validationError =
            (((!showErrorOnBlur && meta.modified) || meta.touched) && meta.error) ||
            (showErrorOnRender && meta.error);

          return (
            <div className={cx(styles.field, fieldClassName)} data-testid={`${name}-field-container`}>
              <Label
                name={name}
                label={label}
                required={required}
                inputId={inputId}
                tooltipLink={tooltipLink}
                tooltipLinkText={tooltipLinkText}
                tooltipText={tooltipText}
                tooltipDataTestId={tooltipDataTestId}
                tooltipLinkTarget={tooltipLinkTarget}
                tooltipIcon={tooltipIcon}
              />
              <input
                id={inputId}
                {...input}
                {...inputProps}
                disabled={disabled}
                placeholder={placeholder}
                data-testid={`${name}-text-input`}
                className={cx(styles.input, { invalid: !!validationError }, className)}
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

TextInputField.displayName = 'TextInputField';
