import { Validator } from './validator.types';

export const maxLength = (length: number): Validator => (value: string) => {
  if (value.length <= length) {
    return undefined;
  }

  return `Must contain at most ${length} characters`;
};
