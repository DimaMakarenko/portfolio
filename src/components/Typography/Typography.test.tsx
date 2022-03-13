import { render, screen } from '@testing-library/react';

import { Typography } from '.';

const text = 'test text';

describe('<Typography />', () => {
  test('should correct render h1 styles', () => {
    render(<Typography variant="h1">{text}</Typography>);
    expect(screen.getByText(text)).toHaveStyle(
      'font-size: 80px; line-height: 88px; font-weight: 600;',
    );
  });
  test('should correct render h2 styles', () => {
    render(<Typography variant="h2">{text}</Typography>);
    expect(screen.getByText(text)).toHaveStyle('font-size: 68px; line-height: 72px;');
  });
  test('should correct render h4 styles', () => {
    render(<Typography variant="h4">{text}</Typography>);
    expect(screen.getByText(text)).toHaveStyle('font-size: 30px; line-height: 34px;');
  });
  test('should correct render color', () => {
    render(<Typography color="#123456">{text}</Typography>);
    expect(screen.getByText(text)).toHaveStyle('color: #123456;');
  });
});
