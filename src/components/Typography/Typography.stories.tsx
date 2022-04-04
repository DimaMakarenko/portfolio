import { Meta, Story } from '@storybook/react';

import { Typography } from '.';

export const Default: Story = () => {
  return (
    <>
      <Typography variant="h1">Header 1</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="sub-title">Sub title</Typography>
      <Typography>Text</Typography>
    </>
  );
};

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;
