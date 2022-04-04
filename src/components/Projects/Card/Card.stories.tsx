import { Meta, Story } from '@storybook/react';

import { Project, Technologies } from 'types';

import { ProjectCard } from '.';

const project: Project = {
  title: 'Portfolio',
  description: "Hi, I'm react developer",
  technologies: [Technologies.React],
  url: 'google.com',
  sourceUrl: 'google.com',
};

export const Default: Story = () => {
  return (
    <div style={{ width: '350px' }}>
      <ProjectCard {...project} />
    </div>
  );
};

export default {
  title: 'Components/Projects/Card',
  component: ProjectCard,
} as Meta;
