import {SelectableValue} from '@grafana/data';
import {generateOptions} from '../../__mocks__/mockAsyncSelectOptions';

export const loadAsyncOptions = () => {
  return new Promise<Array<SelectableValue<string>>>((resolve) => {
    setTimeout(() => {
      resolve(generateOptions());
    }, 5000);
  });
};
