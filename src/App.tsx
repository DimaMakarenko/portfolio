import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { SocialSide } from 'components';
import { Hero, About, Experience, Works } from 'sections';

const Main = styled.main`
  padding: 0px 150px;
`;

export function App(): ReactElement {
  return (
    <Main>
      <SocialSide />
      <Hero />
      <About />
      <Experience />
      <Works />
    </Main>
  );
}
