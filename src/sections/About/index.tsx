import { ReactElement } from 'react';

import { CounterHeading, Typography, List } from 'components';
import { technologies } from 'constants/index';

export const About = (): ReactElement => {
  return (
    <section>
      <CounterHeading count={1}>About</CounterHeading>
      <Typography>Hi! My name is Dima.</Typography>
      <List data={technologies} columns={2} />
    </section>
  );
};
