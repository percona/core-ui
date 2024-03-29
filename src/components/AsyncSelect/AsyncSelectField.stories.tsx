import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormRenderProps } from 'react-final-form';
import { AsyncSelectField } from './AsyncSelectField';
import { email, minLength, maxLength } from '../../shared/validators';
import { loadAsyncOptions } from '../../shared/utils/loadAsyncOptions';

export default {
  title: 'Form Fields/AsyncSelectField',
  component: AsyncSelectField,
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
} as ComponentMeta<typeof AsyncSelectField>;

const Template: ComponentStory<typeof AsyncSelectField> = (args) => (
  <AsyncSelectField loadOptions={loadAsyncOptions} {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'select',
  defaultOptions: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'select',
  label: 'AsyncSelectField',
  defaultOptions: true,
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'select',
  validators: [minLength(13), email, maxLength(15)],
  defaultOptions: true,
};
