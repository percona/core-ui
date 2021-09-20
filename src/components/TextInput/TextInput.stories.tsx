import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInputField } from './TextInputField';
import * as validators from '../../shared/validators';

const { email, required } = validators;

export default {
  title: 'Form Fields/TextInputField',
  component: TextInputField,
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
} as ComponentMeta<typeof TextInputField>;

const Template: ComponentStory<typeof TextInputField> = (args) => <TextInputField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'text',
  label: 'Text input',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'email',
  label: 'Email',
  validators: [email, required],
};
