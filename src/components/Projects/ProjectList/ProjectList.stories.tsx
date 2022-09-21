import { Meta, Story } from '@storybook/react';

import { Projects, Technologies } from 'types';

import { ProjectList } from '.';

const project: Projects = new Array(7).fill({
  title: 'Portfolio',
  description: "Hi, I'm react developer",
  technologies: [Technologies.React],
  url: 'google.com',
  sourceUrl: 'google.com',
});

export const Default: Story = () => {
  return <ProjectList projects={project} />;
};

export default {
  title: 'Components/Projects/List',
  component: ProjectList,
} as Meta;
