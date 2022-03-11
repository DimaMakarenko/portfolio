import styled from 'styled-components/macro';

import { Layout } from 'components/Layout';

const HeronW = styled.div`
  min-height: 100vh;
`;

const Title = styled.h2``;
const Name = styled.h1``;
const Description = styled.p``;

export function Hero() {
  return (
    <Layout>
      <HeronW>
        <Title>Hi, my name is</Title>
        <Name>Dima Makarenko.</Name>
        <Description>
          I&apos;m a front-end developer specializing in building SPA applications with React.js
        </Description>
      </HeronW>
    </Layout>
  );
}
