import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectableValue } from '@grafana/data';
import { Pagination } from './Pagination';

const options: Array<SelectableValue<number>> = [
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
];

export default {
  title: 'Overlays/Pagination',
  component: Pagination,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  pagesPerView: 3,
  totalItems: 15,
  pageCount: 5,
  pageSizeOptions: options,
  pageSize: 3,
  nrRowsOnCurrentPage: 3,
};
