import { ReactElement } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { MainPage, ProjectsPage } from 'pages';

export const routes = {
  main: `/portfolio/`,
  projects: '/portfolio/projects',
};

export const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.projects} element={<ProjectsPage />} />
        <Route path="*" element="" />
      </Switch>
    </BrowserRouter>
  );
};
