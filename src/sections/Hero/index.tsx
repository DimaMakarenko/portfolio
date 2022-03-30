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
  margin: 0 0 100px;
  text-align: center;
`;

const NameW = styled.div`
  margin: 10px 0 15px;
`;

export function Hero() {
  return (
    <HeronW>
      <Typography variant="h2">Hi, my name is</Typography>
      <NameW>
        <Typography variant="h1" color={theme.colors.text}>
          Dima Makarenko
        </Typography>
      </NameW>
      <Typography>
        I&apos;m a front-end developer specializing in building SPA applications with{' '}
        <Link href={config.links.react}>React.js</Link>.
      </Typography>
    </HeronW>
  );
}
