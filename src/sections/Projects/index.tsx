import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ProjectList, Section, Button } from 'components';
import { projects } from 'content';
import { routes } from 'routes';
import { NavLinkNames } from 'types';

const ButtonW = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export function Projects(): ReactElement {
  const shortProjectList = projects.slice(0, 5);

  return (
    <Section id={NavLinkNames.Projects} title="Some projects">
      <ProjectList projects={shortProjectList} />
      <ButtonW>
        <NavLink to={routes.projects}>
          <Button>More Projects</Button>
        </NavLink>
      </ButtonW>
    </Section>
  );
}
