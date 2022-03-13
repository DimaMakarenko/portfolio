import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { config } from 'config';
import { theme } from 'styles';

import { Hero } from '.';

describe('<Hero />', () => {
  test('render Hero text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>,
    );
    expect(screen.getByText(/dima makarenko/i)).toBeInTheDocument();
    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a front-end developer specializing in building SPA applications with/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /react.js/i })).toHaveAttribute(
      'href',
      config.links.react,
    );
  });
});
