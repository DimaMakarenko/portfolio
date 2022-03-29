import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Typography, List, Section, TypographyElement } from 'components';
import { technologies } from 'content';
import { theme } from 'styles';
import { NavLinkNames } from 'types';

const ListW = styled.div`
  margin: 10px 0 15px;
`;

const Description = styled(TypographyElement)`
  font-size: 18px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 16px;
    text-align: justify;
  }
`;

export const About = (): ReactElement => {
  return (
    <Section id={NavLinkNames.About} title="About">
      <Typography>Hi! My name is Dima. I&apos;m Front-end developer.</Typography>
      <Typography>Here are a few technologies I&apos;ve been working with recently:</Typography>
      <ListW>
        <List data={technologies} />
      </ListW>
      <Typography variant="sub-title" color={theme.colors.text}>
        Summary of Qualifications
      </Typography>
      <Description>
        I have over two years of experience with React.js. Worked on architecture and project setup.
        Created SPA applications, application with flexible design and animations, and supported
        existing ones. I like programming and I&apos;m interested in developing in this direction. I
        try to write good projects that are easy to understand and scale. I am professional and
        responsible for the work I do.
      </Description>
      <Typography variant="sub-title" color={theme.colors.text}>
        Additional Accomplishments
      </Typography>
      <Description>
        One of the improvements for the project is the implementation of interaction with the
        back-end API through the React-query. This allows the application to cache requests and make
        the user interface run faster. Used ready-made component libraries, which reduced
        development time. Studied different libraries, development approaches on pet projects. For
        example, used Firebase as database and back-end. Attended various conferences and read
        technical literature. Helped a trainee with test task and was mentor for him.
      </Description>
    </Section>
  );
};
