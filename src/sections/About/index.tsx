import { ReactElement } from 'react';

import { CounterHeading, Typography } from 'components';

export const About = (): ReactElement => {
  return (
    <div>
      <CounterHeading count={1}>About</CounterHeading>
      <Typography>Hi! My name is Dima.</Typography>
    </div>
  );
};
