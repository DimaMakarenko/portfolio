import styled from 'styled-components/macro';

import { Link, Typography } from 'components';
import { config } from 'config';
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
      <Typography>
        I&apos;m a front-end developer specializing in building SPA applications with{' '}
        <Link href={config.links.react}>React.js</Link>.
      </Typography>
      <Link href={`mailto:${config.email}`} variant="button">
        Say Hi
      </Link>
    </HeronW>
  );
}
