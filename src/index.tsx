import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, theme } from 'styles';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
