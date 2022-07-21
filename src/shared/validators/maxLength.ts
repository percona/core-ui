import { Validator } from './validator.types';

export const maxLength = (length: number): Validator => (value: string) => {
  // No value would satisfy this validator by definition
  if (value == null) {
    return undefined;
  }
  
  if (value.length <= length) {
    return undefined;
  }

  return `Must contain at most ${length} characters`;
};
