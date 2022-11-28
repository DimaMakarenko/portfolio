import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

const MainStyled = styled.main`
  padding: 0px 150px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;

  @media ${({ theme }) => theme.devices.laptop} {
    padding: 0px 100px;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 0px 30px;
  }
`;

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps): ReactElement => {
  return <MainStyled>{children}</MainStyled>;
};
