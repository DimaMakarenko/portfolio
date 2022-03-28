import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Header, IconLoader, Footer, LeftSide, RightSide } from 'components';
import { Hero, About, Experience, Projects, Contact } from 'sections';

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
        <LeftSide />
        <RightSide />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </div>
  );
}
