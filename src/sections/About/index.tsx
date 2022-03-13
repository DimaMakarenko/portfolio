import { ReactElement } from 'react';

import { CounterHeading, Typography } from 'components';

export const About = (): ReactElement => {
  return (
    <div>
      <CounterHeading count={1}>About</CounterHeading>
      <Typography>
        Hello! My name is Dima and I enjoy creating things that live on the internet. My interest in
        web development started back in 2012
      </Typography>
    </div>
  );
};
