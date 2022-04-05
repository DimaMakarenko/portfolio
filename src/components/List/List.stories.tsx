import { Meta, Story } from '@storybook/react';

import { List } from '.';

const technologies = ['react', 'js', 'html', 'css', 'redux'];

export const Default: Story = () => {
  return <List data={technologies} />;
};

export default {
  title: 'Components/List',
  component: List,
} as Meta;
