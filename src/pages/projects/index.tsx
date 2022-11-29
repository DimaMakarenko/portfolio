import { ReactElement, useEffect } from 'react';
import styled from 'styled-components/macro';

import { Main } from 'components';

import { FullList } from './sections';

const ProjectsPageStyled = styled.div`
  padding-top: 50px;
`;

export const ProjectsPage = (): ReactElement => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <Main>
      <ProjectsPageStyled>
        <FullList />
      </ProjectsPageStyled>
    </Main>
  );
};
