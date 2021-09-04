import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NumberInputField } from './NumberInputField';
import * as validators from '../../shared/validators';

const { required } = validators;

export default {
  title: 'Form Fields/NumberInputField',
  component: NumberInputField,
  decorators: [
    (Story) => (
      <Form onSubmit={() => {}}>
        {({ handleSubmit }: FormRenderProps) => (
          <form style={{ width: '100%', maxWidth: 400 }} onSubmit={handleSubmit}>
            <Story />
          </form>
        )}
      </Form>
    ),
  ],
} as ComponentMeta<typeof NumberInputField>;

const Template: ComponentStory<typeof NumberInputField> = (args) => <NumberInputField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'number',
  label: 'Number input',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'number',
  label: 'Number input',
  validators: [required],
};
