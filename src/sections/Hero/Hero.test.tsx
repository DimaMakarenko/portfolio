import { render, screen } from '@testing-library/react';

import { Hero } from '.';

describe('<Hero />', () => {
  test('render Hero text', () => {
    render(<Hero />);
    expect(screen.getByText(/dima makarenko/i)).toBeInTheDocument();
    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /I'm a front-end developer specializing in building SPA applications with React.js./i,
      ),
    ).toBeInTheDocument();
  });
});
