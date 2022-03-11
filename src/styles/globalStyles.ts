import { createGlobalStyle } from 'styled-components/macro';
import { reset } from 'styled-reset';

import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.slate};
    font-size: 20px;
    line-height: 25px;
  }
`;
