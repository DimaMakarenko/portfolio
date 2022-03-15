import { ReactElement } from 'react';

import { CounterHeading } from 'components';

export function Works(): ReactElement {
  return (
    <section>
      <CounterHeading count={3}>My pet-projects</CounterHeading>
    </section>
  );
}
