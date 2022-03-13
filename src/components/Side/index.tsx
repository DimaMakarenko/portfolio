import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

const SideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: ${({ theme }) => theme.zIndex.side};

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.colors.lightestSlate};
  }
`;

interface SideProps {
  children: ReactNode;
}

export const Side = ({ children }: SideProps): ReactElement => {
  return <SideElement>{children}</SideElement>;
};
