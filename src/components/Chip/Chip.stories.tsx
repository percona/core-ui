import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '.';

export default {
  title: 'Chip',
  component: Chip,
  args: {
    text: 'text',
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Basic = Template.bind({});
