import { Meta, Story } from '@storybook/react';

import { Code } from '.';

export const Default: Story = () => {
  return (
    <>
      <Code>React</Code>
      <br />
      <Code>Type Script</Code>
    </>
  );
};

export default {
  title: 'Components/Code',
  component: Code,
} as Meta;
