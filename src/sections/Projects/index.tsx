import { ReactElement } from 'react';

import { ProjectList, Section } from 'components';
import { projects } from 'content';
import { NavLinkNames } from 'types';

export function Projects(): ReactElement {
  return (
    <Section id={NavLinkNames.Projects} title="My pet-projects">
      <ProjectList projects={projects} />
    </Section>
  );
}
