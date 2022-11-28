import { ReactElement } from 'react';

import { Main } from 'components';
import { Hero, About, Experience, Projects, Contact, Footer, Header } from 'sections';

export const MainPage = (): ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};
