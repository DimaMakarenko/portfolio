import { ReactElement } from 'react';

import { CounterHeading, ProjectList } from 'components';
import { projects } from 'content';
import { NavLinkNames } from 'types';

export function Projects(): ReactElement {
  return (
    <section id={NavLinkNames.Projects}>
      <CounterHeading count={3}>My pet-projects</CounterHeading>
      <ProjectList projects={projects} />
    </section>
  );
}
