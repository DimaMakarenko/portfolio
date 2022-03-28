import { ReactElement, ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components/macro';

export const SectionW = styled.section``;

const Header = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondText};
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 34px;
  margin: 10px 0 40px;
  justify-content: center;
`;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
}

export function Section({ children, title, ...otherProps }: SectionProps): ReactElement {
  return (
    <SectionW>
      <Header>{title}</Header>
      {children}
    </SectionW>
  );
}
