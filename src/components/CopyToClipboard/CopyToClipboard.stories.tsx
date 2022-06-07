import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@grafana/ui';
import { CopyToClipboard } from './CopyToClipboard';

export default {
  title: 'Buttons/CopyToClipboard',
  component: CopyToClipboard,
} as ComponentMeta<typeof CopyToClipboard>;

const Template: ComponentStory<typeof CopyToClipboard> = (args) => {
  const outputRef = useRef(null);

  return (
    <div>
      <div ref={outputRef}>
        <p>
          <span>Test some text to Copy (span1). </span>
          <span>Test some text to Copy (span2).</span>
          <Button>Test some text to Copy (button). </Button>
          Test some text to Copy (p).
        </p>
        <p>
          Test some text to Copy in p tag with using br tag
          <br />
          Next string after br tag
        </p>
        <p>{'Test some text to Copy in p tag with using u000A unicode\u000ANext string after u000A'}</p>
        <div>Test some text to Copy (div)</div>
      </div>
      <CopyToClipboard {...args} textContainer={outputRef} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
