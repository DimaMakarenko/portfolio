import { screen, render, fireEvent } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from 'styles';

import { Link, LinkProps } from '.';

const text = 'test text';

interface SetupTestProps {
  variant?: LinkProps['variant'];
}

function setupTest({ variant }: SetupTestProps = {}) {
  render(
    <ThemeProvider theme={theme}>
      (<Link variant={variant}>{text}</Link>
    </ThemeProvider>,
  );
  const textElement = screen.getByText(text);
  return { textElement };
}

describe('<Link />', () => {
  test('should correct render default link', () => {
    const { textElement } = setupTest();
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle(`color: ${theme.colors.violet}`);
  });
});
