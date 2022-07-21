import { GetSelectValueFunction, Validator, VResult } from './validator.types';

export const compose = (validators: Validator[], getValue?: GetSelectValueFunction<any>) => (
  value: any,
  values?: Record<string, any>,
  meta?: any,
): VResult => {
  let result: string | undefined;

  const hasRequired = validators.find((item) => item.name === 'required');

  // eslint-disable-next-line no-restricted-syntax
  for (const validator of validators) {
    if (hasRequired || (!hasRequired && value)) {
      if (getValue) {
        result = validator(getValue(value), values, meta);
      } else {
        result = validator(value, values, meta);
      }
    }

    if (result !== undefined) {
      break;
    }
  }

  return result;
};
