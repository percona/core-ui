import React, { forwardRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

const DropdownToggle = forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button type="button" ref={ref} {...props}>
      Actions
    </button>
));

export default {
  title: 'Buttons/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <span>
      First
    </span>
    <span>
      Second
    </span>
  </Dropdown>
);

export const Basic = Template.bind({});
Basic.args = {
  toggle: DropdownToggle,
};
