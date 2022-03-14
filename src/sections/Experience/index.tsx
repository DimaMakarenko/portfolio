import { ReactElement } from 'react';

import { CounterHeading, TabList } from 'components';

export function Experience(): ReactElement {
  const jobs = ['apple', 'google', 'microsoft', 'amazon', 'facebook'];
  return (
    <section>
      <CounterHeading count={2}>Where I&apos;ve Worked</CounterHeading>
      <TabList tabs={jobs} />
    </section>
  );
}
