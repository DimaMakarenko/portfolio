import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { SocialSide, Header, IconLoader } from 'components';
import { Hero, About, Experience, Projects } from 'sections';

const Main = styled.main`
  padding: 0px 150px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;
`;

export function App(): ReactElement {
  return (
    <div>
      <IconLoader />
      <Header />
      <Main>
        <SocialSide />
        <Hero />
        <About />
        <Experience />
        <Projects />
      </Main>
    </div>
  );
}
