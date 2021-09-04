import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButtonGroupField } from './RadioButtonGroupField';

const options1 = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
];
const options2 = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium', icon: 'clock' },
  { label: 'High', value: 'high' },
];
const options3 = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium', disabled: true },
  { label: 'High', value: 'high' },
];

export default {
  title: 'Form Fields/RadioButtonGroupField',
  component: RadioButtonGroupField,
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
} as ComponentMeta<typeof RadioButtonGroupField>;

const Template: ComponentStory<typeof RadioButtonGroupField> = (args) => <RadioButtonGroupField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: options1,
  name: 'radiobuttons',
  label: 'Choice',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  options: options2,
  name: 'radiobuttons',
  label: 'Choice',
};

export const WithDisabledChoice = Template.bind({});
WithDisabledChoice.args = {
  options: options3,
  name: 'radiobuttons',
  label: 'Choice',
};
