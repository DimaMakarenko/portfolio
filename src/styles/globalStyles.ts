import { createGlobalStyle } from 'styled-components/macro';
import { reset } from 'styled-reset';

import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    
  }
  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    line-height: 25px;
    font-family: 'Poppins', sans-serif;
  }
  section {
    margin: 100px 0 175px;
  }
  button {
    border: 0px;
    border-radius: 0px;
    cursor: pointer;
  }
  a {
    text-decoration: none ;
  }
  
  .code {
    font-family: 'Inconsolata', monospace;
  }
`;
