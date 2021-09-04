import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableToolbar } from './TableToolbar';

export default {
  title: 'Buttons/TableToolbar',
  component: TableToolbar,
} as ComponentMeta<typeof TableToolbar>;

const Template: ComponentStory<typeof TableToolbar> = (args) => <TableToolbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  actions: [
    { callback: () => {}, label: 'Add something', icon: 'plusSquare' },
    { callback: () => {}, label: 'Remove selected', icon: 'minusSquare', isBulkAction: true },
  ],
  selectedItems: [],
};

export const WithSelectedItems = Template.bind({});
WithSelectedItems.args = {
  actions: [
    { callback: () => {}, label: 'Add something', icon: 'plusSquare' },
    { callback: () => {}, label: 'Remove selected', icon: 'minusSquare', isBulkAction: true },
  ],
  selectedItems: ['A', 'B'],
};
