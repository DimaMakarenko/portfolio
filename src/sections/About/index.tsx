import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Typography, List, Section, TypographyElement, Link, Button } from 'components';
import { config } from 'config';
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

const LinkW = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
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
        I have been working as a front-end developer since 2019. Worked on architecture and project
        setup. Created SPA applications, applications with flexible design and animations, and
        supported existing ones. I am very passionate about technology, especially enjoying the
        advances in programming and development in this filed. I follow development principles, keep
        the code clear, understandable and flexible to implement new features.
      </Description>
      <Typography variant="sub-title" color={theme.colors.text}>
        Additional Accomplishments
      </Typography>
      <Description>
        One of the improvements for the project is the implementation of interaction with the
        back-end API through the React-query. This allows the application to cache requests and
        makes the user interface run faster. Used ready-made component libraries, which reduced
        development time. Studied different libraries, and development approaches on pet projects.
        For example, used Firebase as a database and back-end. Attended various conferences and read
        technical literature. Helped a trainee with tasks and was a mentor for him.
      </Description>
      <LinkW>
        <Link variant="basic" href={config.docResume}>
          <Button>Resume</Button>
        </Link>
      </LinkW>
    </Section>
  );
};
