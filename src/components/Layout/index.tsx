import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

const LayoutW = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  height: 100%;
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): ReactElement {
  return <LayoutW>{children}</LayoutW>;
}
