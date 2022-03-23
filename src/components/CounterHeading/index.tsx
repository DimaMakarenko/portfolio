import { ReactNode } from 'react';
import styled from 'styled-components/macro';

interface CounterHeadingProps {
  children: ReactNode;
  count: number;
}
const CounterHeadingElement = styled.h2<Pick<CounterHeadingProps, 'count'>>`
  position: relative;
  color: ${({ theme }) => theme.colors.lightestSlate};
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;

  &:before {
    content: '0${({ count }) => count}.';
    position: relative;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    font-family: 'Inconsolata', monospace;
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.slate};
  }

  font-weight: 600;
  font-size: 32px;
`;

export const CounterHeading = ({ children, count }: CounterHeadingProps) => {
  return <CounterHeadingElement count={count}>{children}</CounterHeadingElement>;
};
