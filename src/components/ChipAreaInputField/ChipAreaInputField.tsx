import React, { FC, useMemo, useRef, useState, KeyboardEvent, ChangeEvent } from 'react';
import { Field, FieldMetaState, FieldInputProps, UseFieldConfig } from 'react-final-form';
import { cx } from 'emotion';
import { useStyles } from '@grafana/ui';
import { Chip } from '../Chip';
import { Label } from '../Label';
import { Validator, compose } from '../../shared/validators';
import { getStyles } from './ChipAreaInputField.styles';
import { FieldInputAttrs, LabeledFieldProps } from '../../shared/types';

/**
 * Note: the validation error message will be displayed once the the input has been modified.
 * To show the error message on blur you have to pass `showErrorOnBlur`.
 */
export interface ChipAreaInputFieldProps extends UseFieldConfig<string>, LabeledFieldProps {
  className?: string;
  disabled?: boolean;
  fieldClassName?: string;
  inputProps?: FieldInputAttrs;
  placeholder?: string;
  showErrorOnBlur?: boolean;
  validators?: Validator[];
  initialChips: string[];
}

interface ChipAreaInputFieldRenderProps {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
}

export const ChipAreaInputField: FC<ChipAreaInputFieldProps> = React.memo(
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
    validators,
    tooltipText = '',
    tooltipLink,
    tooltipLinkText,
    tooltipIcon,
    tooltipDataTestId,
    tooltipLinkTarget,
    initialChips = [],
    ...fieldConfig
  }) => {
    const styles = useStyles(getStyles);
    const [chips, setChips] = useState([...initialChips]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const validate = useMemo(() => (Array.isArray(validators) ? compose(...validators) : undefined), [
      validators,
    ]);

    const handleClick = () => {
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputRef.current) {
        setChips([...chips, inputRef.current.value]);
        setInputValue('');
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    return (
      <Field {...fieldConfig} type='text' name={name} validate={validate}>
        {({ input, meta }: ChipAreaInputFieldRenderProps) => {
          const validationError = ((!showErrorOnBlur && meta.modified) || meta.touched) && meta.error;

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
              <div className={styles.chips} onClick={handleClick}>
                {chips.map(chip => <Chip isRemovable text={chip} />)}
                <input
                  ref={inputRef}
                  id={inputId}
                  {...input}
                  {...inputProps}
                  value={inputValue}
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  data-testid={`${name}-text-input`}
                  className={cx(styles.input, { invalid: !!validationError }, className)}
                />
              </div>
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

ChipAreaInputField.displayName = 'ChipAreaInputField';
