import { compose } from './compose';
import { required } from './required';
import { maxLength } from './maxLength';
import { email } from './email';

describe('validators :: compose', () => {
  it('returns the first error message', () => {
    let validate = compose([jest.fn().mockReturnValue('test'), jest.fn().mockReturnValue('ignored')]);

    expect(validate('testValue', {})).toEqual('test');

    validate = compose([jest.fn(), jest.fn().mockReturnValue('test 2')]);

    expect(validate('testValue', {})).toEqual('test 2');
  });

  it('should show required error when required validator is first in array', () => {
    const validate = compose([required, maxLength(10), email]);

    expect(validate(undefined)).toEqual('Required field');
  });

  it('should not show errors for empty field when required validator is not in array', () => {
    const validate = compose([maxLength(10), email]);

    expect(validate(undefined)).toEqual(undefined);
  });
});
