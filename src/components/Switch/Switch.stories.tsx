import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchField } from './Switch';

export default {
  title: 'Form Fields/SwitchField',
  component: SwitchField,
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
} as ComponentMeta<typeof SwitchField>;

const Template: ComponentStory<typeof SwitchField> = (args) => <SwitchField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'switch',
  label: 'Switch',
};
