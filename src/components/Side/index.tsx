import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface SideProps {
  children: ReactNode;
  position?: 'left' | 'right';
}

const SideElement = styled.div<Pick<SideProps, 'position'>>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ position }) => (position === 'left' ? '40px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '40px' : 'auto')};

  z-index: ${({ theme }) => theme.zIndex.side};

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

export const Side = ({ position = 'left', children }: SideProps): ReactElement => {
  return <SideElement position={position}>{children}</SideElement>;
};
