import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChipAreaInputField } from './ChipAreaInputField';
import * as validators from '../../shared/validators';

const { minTags } = validators;

export default {
  title: 'Form Fields/ChipAreaInputField',
  component: ChipAreaInputField,
  args: {
    initialChips: [],
  },
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
} as ComponentMeta<typeof ChipAreaInputField>;

const Template: ComponentStory<typeof ChipAreaInputField> = (args) => <ChipAreaInputField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'chips',
  label: 'Chip area input',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'chips',
  label: 'Chip area input',
  validators: [minTags(1)],
};
