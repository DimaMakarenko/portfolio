import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { Main } from 'pages';
import { GlobalStyle, theme } from 'styles';

export function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}
