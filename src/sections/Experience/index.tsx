import { ReactElement } from 'react';

import { Section, TabList } from 'components';
import { jobs } from 'content';
import { NavLinkNames } from 'types';

import { jobsAdapter } from './adapter';

export function Experience(): ReactElement {
  const jobsExperience = jobsAdapter(jobs);

  return (
    <Section id={NavLinkNames.Experience} title="Where I've Worked">
      <TabList tabs={jobsExperience} />
    </Section>
  );
}
