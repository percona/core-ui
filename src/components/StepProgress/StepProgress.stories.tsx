import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StepProgress } from './StepProgress';
import { LoaderButton, TextInputField } from '..';
import * as validators from '../../shared/validators';

const { email, required } = validators;

export default {
  title: 'Layout/StepProgress',
  component: StepProgress,
} as ComponentMeta<typeof StepProgress>;

const Template: ComponentStory<typeof StepProgress> = (args) => <StepProgress {...args} />;

const steps = [
    {
      title: 'First step',
      render: () => (
        <div>
          <TextInputField label="Name (required)" name="name" validators={[required]} />
          <TextInputField label="Email (required)" name="email" validators={[email, required]} />
        </div>
      ),
      fields: ['name', 'email'],
      dataQa: 'step-1',
    },
    {
      render: () => (
        <div>
          <TextInputField label="Details (not required)" name="details" />
        </div>
      ),
      fields: ['details'],
      dataQa: 'step-2',
    },
    {
      title: 'Final Step',
      render: () => (
        <div>
          <TextInputField label="Description (required)" name="description" validators={[required]} />
          <LoaderButton type="submit">Submit</LoaderButton>
        </div>
      ),
      fields: ['description'],
      dataQa: 'step-2',
    },
];

export const Basic = Template.bind({});
Basic.args = {
  steps,
};
