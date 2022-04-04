import { Meta, Story } from '@storybook/react';

import { Side } from '.';

export const Default: Story = () => {
  return (
    <>
      <Side position="left">Left side</Side>
      <Side position="right">Right side</Side>
    </>
  );
};

export default {
  title: 'Components/Side',
  component: Side,
} as Meta;
