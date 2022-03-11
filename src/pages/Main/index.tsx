import styled from 'styled-components/macro';

import { Layout } from 'components/Layout';

const MainW = styled.div`
  min-height: 100vh;
`;

export function Main() {
  return (
    <Layout>
      <MainW>Learn React</MainW>
    </Layout>
  );
}
