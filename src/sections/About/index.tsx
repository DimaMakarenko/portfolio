import { ReactElement } from 'react';

import { CounterHeading, Typography, List } from 'components';
import { technologies } from 'content';
import { theme } from 'styles';

export const About = (): ReactElement => {
  return (
    <section>
      <CounterHeading count={1}>About</CounterHeading>
      <Typography>Hi! My name is Dima.</Typography>
      <Typography>Here are a few technologies I&apos;ve been working with recently:</Typography>
      <List data={technologies} columns={3} />
      <Typography variant="sub-title" color={theme.colors.lightestSlate}>
        Summary of Qualifications
      </Typography>
      <Typography>
        I have over two years of experience with React.js. Worked on architecture and project setup.
        Created SPA applications, application with flexible design and animations, and supported
        existing ones. I like programming and I&apos;m interested in developing in this direction. I
        try to write good projects that are easy to understand and scale. I am professional and
        responsible for the work I do.
      </Typography>
      <Typography variant="sub-title" color={theme.colors.lightestSlate}>
        Additional Accomplishments
      </Typography>
      <Typography>
        One of the improvements for the project is the implementation of interaction with the
        back-end API through the React-query. This allows the application to cache requests and make
        the user interface run faster. Used ready-made component libraries, which reduced
        development time. Studied different libraries, development approaches on pet projects. For
        example, used Firebase as database and back-end. Attended various conferences and read
        technical literature. Helped a trainee with test task and was mentor for him.
      </Typography>
    </section>
  );
};
