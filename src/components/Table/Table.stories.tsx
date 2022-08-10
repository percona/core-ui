import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, TableProps } from '.';

const getItems = (count: number) =>
  new Array(count).fill(null).map((_, idx) => ({
    firstName: `John ${idx}`,
    lastName: `Doe ${idx}`,
  }));

const props: TableProps = {
  columns: [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
  ],
  data: getItems(10),
  totalItems: 10,
};

export default {
  title: 'Table',
  component: Table,
  args: props,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});

export const Pagination = Template.bind({});
Pagination.args = {
  data: getItems(100),
  totalItems: 100,
  showPagination: true,
  pageSize: 25,
} as TableProps;

export const Selection = Template.bind({});
Selection.args = {
  rowSelection: true,
};

export const SelectionPagination = Template.bind({});
SelectionPagination.args = {
  data: getItems(100),
  totalItems: 100,
  showPagination: true,
  pageSize: 25,
  rowSelection: true,
} as TableProps;
