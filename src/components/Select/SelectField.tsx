import React, { FC, useMemo } from 'react';
import { Select, SelectCommonProps, useStyles2, ActionMeta } from '@grafana/ui';
import { Field, FieldInputProps, UseFieldConfig } from 'react-final-form';
import { cx } from '@emotion/css';
import { SelectableValue } from '@grafana/data';
import { Label } from '../Label';
import { LabeledFieldProps } from '../../shared/types';
import { Validator, GetSelectValueFunction, compose } from '../../shared/validators';
import { getStyles } from './SelectField.styles';

export interface SelectFieldProps<T>
  extends Omit<UseFieldConfig<T>, 'value' | 'defaultValue'>,
    LabeledFieldProps,
    Omit<SelectCommonProps<T>, 'onChange'> {
  className?: string;
  validators?: Validator[];
  fieldClassName?: string;
  showErrorOnBlur?: boolean;
  onChange?: (value: SelectableValue<T>, actionMeta: ActionMeta) => {} | void;
  onChangeGenerator?: (
    input: FieldInputProps<any, HTMLElement>,
  ) => (value: SelectableValue<T>, actionMeta: ActionMeta) => {} | void;
  value?: T | SelectableValue<T> | null;
  getValueForValidators?: GetSelectValueFunction<T | SelectableValue<T> | null>;
}

export const SelectField: FC<SelectFieldProps<any>> = ({
  label,
  name,
  required,
  inputId,
  tooltipLink,
  tooltipText,
  tooltipLinkText,
  tooltipDataTestId,
  tooltipIcon,
  tooltipLinkTarget,
  validators,
  getValueForValidators,
  fieldClassName,
  onChange,
  onChangeGenerator,
  className,
  showErrorOnBlur,
  ...fieldConfig
}) => {
  const styles = useStyles2(getStyles);

  const getValue = useMemo(() => getValueForValidators || ((incomingValue: any) => incomingValue?.value), [
    getValueForValidators,
  ]);
  const validate = useMemo(() => (Array.isArray(validators) ? compose(validators, getValue) : undefined), [
    validators,
    getValue,
  ]);

  return (
    <Field {...fieldConfig} name={name} validate={validate}>
      {({ input, meta }) => {
        const validationError = ((!showErrorOnBlur && meta.modified) || meta.touched) && meta.error;

        return (
          <div className={cx(styles.field, fieldClassName)} data-testid={`${name}-field-container`}>
            {label && (
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
            )}
            <Select
              {...fieldConfig}
              className={cx({ invalid: !!validationError }, className)}
              {...input}
              onChange={(value, actionMeta) => {
                if (onChangeGenerator) {
                  onChangeGenerator(input);
                } else if (onChange) {
                  onChange(value, actionMeta);
                }

                input.onChange(value);
              }}
            />
            <div data-testid={`${name}-field-error-message`} className={styles.errorMessage}>
              {validationError}
            </div>
          </div>
        );
      }}
    </Field>
  );
};
