import { ReactElement } from 'react';

import { CounterHeading, TabList } from 'components';
import { jobs } from 'content';

import { jobsAdapter } from './adapter';

export function Experience(): ReactElement {
  const jobsExperience = jobsAdapter(jobs);

  return (
    <section>
      <CounterHeading count={2}>Where I&apos;ve Worked</CounterHeading>
      <TabList tabs={jobsExperience} />
    </section>
  );
}
