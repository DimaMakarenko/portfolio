import styled from 'styled-components/macro';

import { Typography } from 'components';
import { theme } from 'styles';

const HeronW = styled.section`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Hero() {
  return (
    <HeronW>
      <Typography variant="h4">Hi, my name is</Typography>
      <Typography variant="h1" color={theme.colors.lightestSlate}>
        Dima Makarenko
      </Typography>
      <Typography variant="h4">
        I&apos;m a front-end developer specializing in building SPA applications with React.js.
      </Typography>
    </HeronW>
  );
}
