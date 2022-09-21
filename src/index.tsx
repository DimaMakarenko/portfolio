import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, theme } from 'styles';

import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
