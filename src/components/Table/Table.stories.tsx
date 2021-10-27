import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Cell, Column } from 'react-table';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import * as validators from '../../shared/validators';

const { email, required } = validators;

const columns = [
  {
    Header: 'Simple column',
    accessor: 'simple',
    width: '30%',
  } as Column,
  {
    Header: 'Custom column',
    accessor: 'custom',
    Cell: ({ row, value }) => (
      <div>Custom cell</div>
    ),
    width: '70%',
  } as Column,
];

export default {
  title: 'Form Fields/Table',
  component: Table,
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
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'text',
  label: 'Text input',
};

export const WithValidators = Template.bind({});
WithValidators.args = {
  name: 'email',
  label: 'Email',
  validators: [email, required],
};
