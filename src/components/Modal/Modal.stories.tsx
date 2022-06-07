import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Overlays/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
  </Modal>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Demo Modal',
  closeOnEscape: true,
  closeOnClickaway: true,
  isVisible: true,
};
