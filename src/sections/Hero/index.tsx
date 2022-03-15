import styled from 'styled-components/macro';

import { Typography, Link } from 'components';
import { config } from 'config';
import { theme } from 'styles';

const HeronW = styled.section`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HiLink = styled.div`
  margin-top: 20px;
`;

export function Hero() {
  return (
    <HeronW>
      <Typography variant="h2">Hi, my name is</Typography>
      <Typography variant="h1" color={theme.colors.lightestSlate}>
        Dima Makarenko
      </Typography>
      <Typography>
        I&apos;m a front-end developer specializing in building SPA applications with{' '}
        <Link href={config.links.react}>React.js</Link>.
      </Typography>
      <HiLink>
        <Link href={`mailto:${config.email}`} variant="button">
          Say Hello
        </Link>
      </HiLink>
    </HeronW>
  );
}
