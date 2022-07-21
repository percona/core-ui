import { Validator } from './validator.types';

export const minLength = (length: number): Validator => (value: string) => {
  if (value == null) {
    return undefined;
  }

  if (value.length >= length) {
    return undefined;
  }

  return `Must contain at least ${length} characters`;
};
