import { ReactElement } from 'react';
import { Routes as Switch, Route, HashRouter } from 'react-router-dom';

import { MainPage, ProjectsPage } from 'pages';

export const routes = {
  main: `/`,
  projects: '/projects',
};

export const Routes = (): ReactElement => {
  return (
    <HashRouter>
      <Switch>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.projects} element={<ProjectsPage />} />
        <Route path="*" element="" />
      </Switch>
    </HashRouter>
  );
};
