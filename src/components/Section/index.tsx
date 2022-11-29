import { ReactElement, ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components/macro';

export const SectionW = styled.section`
  padding: 80px 0;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 40px 0;
  }
`;

const Header = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondText};
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
  margin: 10px 0 60px;
  justify-content: center;
  text-align: center;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 28px;
    line-height: 30px;
    margin: 10px 0 40px;
  }
`;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
}

export function Section({ children, title, ...otherProps }: SectionProps): ReactElement {
  return (
    <SectionW {...otherProps}>
      <Header>{title}</Header>
      {children}
    </SectionW>
  );
}
