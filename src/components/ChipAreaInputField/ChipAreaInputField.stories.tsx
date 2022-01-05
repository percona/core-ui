import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChipAreaInputField } from './ChipAreaInputField';

export default {
  title: 'Form Fields/ChipAreaInputField',
  component: ChipAreaInputField,
  args: {
    initialChips: [],
  },
  decorators: [
    (Story) => (
      <Form onSubmit={(values) => {console.log(values);}}>
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
