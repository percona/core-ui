import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectField } from './SelectField';
import {Form, FormRenderProps} from 'react-final-form';
import * as validators from '../../shared/validators';
import {generateOptions} from '../../__mocks__/mockAsyncSelectOptions';

const {minLength, maxLength, email } = validators;


export default {
  title: 'Form Fields/SelectField',
  component: SelectField,
  decorators: [
    (Story) => (
      <Form onSubmit={() => {}}>
        {({ handleSubmit }: FormRenderProps) => (
          <form style={{ width: '100%', maxWidth: 400 }} onSubmit={handleSubmit}>
            <Story />
            <div>tttt</div>
          </form>
        )}
      </Form>
    ),
  ],
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'select',
  options: generateOptions(),
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'select',
  label: 'SelectField',
  options: generateOptions(),
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'select',
  validators: [minLength(13), email, maxLength(15)],
  options: generateOptions(),
};

