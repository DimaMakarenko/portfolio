import { ReactElement } from 'react';

import { IconLoader } from 'components';
import { Routes } from 'routes';
import { LeftSide, RightSide } from 'sections';

export function App(): ReactElement {
  return (
    <>
      <IconLoader />
      <LeftSide />
      <RightSide />
      <Routes />
    </>
  );
}
