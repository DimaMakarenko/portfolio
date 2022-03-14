import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from 'styles';

import { Typography, TypographyProps } from '.';

const text = 'test text';

interface SetupTestProps {
  variant?: TypographyProps['variant'];
  color?: TypographyProps['color'];
}

const setupTest = ({ variant, color }: SetupTestProps = {}) => {
  render(
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color}>
        {text}
      </Typography>
      )
    </ThemeProvider>,
  );
};

describe('<Typography />', () => {
  test('should correct render h1 styles', () => {
    setupTest({ variant: 'h1' });
    expect(screen.getByText(text)).toHaveStyle(
      'font-size: 80px; line-height: 88px; font-weight: 600;',
    );
  });
  test('should correct render h2 styles', () => {
    setupTest({ variant: 'h2' });
    expect(screen.getByText(text)).toHaveStyle('font-size: 55px; line-height: 59px;');
  });
  test('should correct render sub-title styles', () => {
    setupTest({ variant: 'sub-title' });
    expect(screen.getByText(text)).toHaveStyle('font-size: 20px; line-height: 24px;');
  });
  test('should correct render color', () => {
    setupTest({ color: '#123456' });
    expect(screen.getByText(text)).toHaveStyle('color: #123456;');
  });
});
