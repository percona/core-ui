import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxField } from './CheckboxField';
import * as validators from '../../shared/validators';

const { requiredTrue } = validators;

export default {
  title: 'Form Fields/CheckboxField',
  component: CheckboxField,
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
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'checkbox',
  label: 'Checkbox',
};

export const Required = Template.bind({});
Required.args = {
  name: 'checkbox',
  label: 'Checkbox (required)',
  validators: [requiredTrue],
};
