import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordInputField } from './PasswordInputField';
import * as validators from '../../shared/validators';

const { required, minLength } = validators;

export default {
  title: 'Form Fields/PasswordInputField',
  component: PasswordInputField,
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
} as ComponentMeta<typeof PasswordInputField>;

const Template: ComponentStory<typeof PasswordInputField> = (args) => <PasswordInputField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'password',
  label: 'Password input',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'password',
  label: 'Password input',
  validators: [minLength(6), required],
};
