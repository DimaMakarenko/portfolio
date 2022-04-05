import { Meta, Story } from '@storybook/react';

import { TabList } from '.';

const tabs = [
  { title: 'One', value: 'This is first tab' },
  { title: 'Two', value: 'This is second tab' },
  { title: 'Three', value: 'This is third tab' },
  { title: 'Four', value: 'This is fourth tab' },
];

export const Default: Story = () => {
  return <TabList tabs={tabs} />;
};

export default {
  title: 'Components/TabList',
  component: TabList,
} as Meta;
