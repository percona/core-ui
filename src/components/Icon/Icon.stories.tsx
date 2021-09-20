import React from 'react';
import { css } from 'emotion';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Buttons/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <span className={css`
        svg {
          stroke: currentColor;
        }
      `}>
        <Story />
      </span>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'plusSquare',
};
