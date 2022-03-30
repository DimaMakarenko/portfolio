import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Header, IconLoader, Footer, LeftSide, RightSide } from 'components';
import { Hero, About, Experience, Projects, Contact } from 'sections';

const Main = styled.main`
  padding: 0px 150px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;

  @media ${({ theme }) => theme.devices.laptop} {
    padding: 0px 100px;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 0px 30px;
  }
`;

export function App(): ReactElement {
  return (
    <div>
      <IconLoader />
      <Header />
      <LeftSide />
      <RightSide />
      <Main>
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
