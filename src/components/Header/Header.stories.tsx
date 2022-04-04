import { Meta, Story } from '@storybook/react';

import { Header } from '.';

export const Default: Story = () => {
  return <Header />;
};

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;
