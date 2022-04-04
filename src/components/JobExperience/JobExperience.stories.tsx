import { Meta, Story } from '@storybook/react';

import { Job, Technologies } from 'types';

import { JobExperience } from '.';

const job: Job = {
  companyName: 'Apple',
  projectRole: 'Developer',
  companyUrl: 'apple.com',
  period: {
    start: 'May 2020',
    end: 'May 2021',
  },
  responsibilities: 'Coding',
  technologies: [Technologies.React],
  projectTeamSize: '15+ team members',
  description: 'Apple com',
};

export const Default: Story = () => {
  return <JobExperience {...job} />;
};

export default {
  title: 'Components/JobExperience',
  component: JobExperience,
} as Meta;
