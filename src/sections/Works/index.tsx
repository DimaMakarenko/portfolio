import { ReactElement } from 'react';

import { CounterHeading, ProjectList } from 'components';
import { projects } from 'content';

export function Works(): ReactElement {
  return (
    <section>
      <CounterHeading count={3}>My pet-projects</CounterHeading>
      <ProjectList projects={projects} />
    </section>
  );
}
