import { ReactElement } from 'react';

import { ProjectList, Section } from 'components';
import { projects } from 'content';

export const FullList = (): ReactElement => {
  return (
    <Section title="A big list of things I’ve worked on" id="projects">
      <ProjectList projects={projects} />
    </Section>
  );
};
