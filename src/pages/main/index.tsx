import { ReactElement } from 'react';

import { Main } from 'components';
import { Hero, About, Experience, Projects, Contact } from 'sections';

export const MainPage = (): ReactElement => {
  return (
    <Main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Main>
  );
};
