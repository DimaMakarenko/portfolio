import { Meta, Story } from '@storybook/react';

import { Navbar } from '.';

export const Default: Story = () => {
  return <Navbar />;
};

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;
