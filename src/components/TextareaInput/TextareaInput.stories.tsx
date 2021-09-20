import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextareaInputField } from './TextareaInputField';
import * as validators from '../../shared/validators';

const { minLength, maxLength, required } = validators;

export default {
  title: 'Form Fields/TextareaInputField',
  component: TextareaInputField,
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
} as ComponentMeta<typeof TextareaInputField>;

const Template: ComponentStory<typeof TextareaInputField> = (args) => <TextareaInputField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'textarea',
  label: 'Text area',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'textarea',
  label: 'Text area',
  validators: [minLength(5), maxLength(20), required],
};
