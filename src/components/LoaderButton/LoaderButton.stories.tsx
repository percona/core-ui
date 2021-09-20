import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoaderButton } from './LoaderButton';

export default {
  title: 'Buttons/LoaderButton',
  component: LoaderButton,
  args: {
    size: 'md',
    variant: 'primary',
    loading: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
        labels: {
          xs: 'Extra Small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
        },
      },
    },
  },
} as ComponentMeta<typeof LoaderButton>;

const Template: ComponentStory<typeof LoaderButton> = (args) => <LoaderButton {...args}>Button</LoaderButton>;

export const Basic = Template.bind({});
