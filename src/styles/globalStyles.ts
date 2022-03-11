import { createGlobalStyle } from 'styled-components/macro';
import { reset } from 'styled-reset';

import { variables } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}

  * {
    box-sizing: border-box;
  }
  body {
    background-color: var(--navy);
    color: var(--slate);
  }
`;
