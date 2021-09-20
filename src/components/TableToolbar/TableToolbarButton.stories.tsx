import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableToolbarButton } from './TableToolbarButton';

export default {
  title: 'Buttons/TableToolbarButton',
  component: TableToolbarButton,
} as ComponentMeta<typeof TableToolbarButton>;

const Template: ComponentStory<typeof TableToolbarButton> = (args) => <TableToolbarButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  icon: 'selectedSquare',
  label: 'Select',
};
