import { maxLength } from './maxLength';

describe('Validator maxLength::', () => {
  it('should return undefined if the string length is equal to or less than required', () => {
    const validator = maxLength(8);

    expect(validator('12345678')).toBeUndefined();
    expect(validator('0Yz56W')).toBeUndefined();
  });

  it('should return an error if the string length is greather than required', () => {
    const length = 8;
    const validator = maxLength(length);
    const errorMessage = `Must contain at least ${length} characters`;

    expect(validator('123456789')).toEqual(errorMessage);
  });
});
