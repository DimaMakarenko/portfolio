import { ReactNode } from 'react';
import styled from 'styled-components/macro';

interface CounterHeadingProps {
  children: ReactNode;
  count: number;
}
const CounterHeadingElement = styled.h2<Pick<CounterHeadingProps, 'count'>>`
  position: relative;
  color: ${({ theme }) => theme.colors.arapawa};
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;

  &:before {
    content: '0${({ count }) => count}.';
    position: relative;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.violet};
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    font-family: 'Inconsolata', monospace;
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: auto;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.colors.glacier};
  }

  font-weight: 600;
  font-size: 32px;
`;

export const CounterHeading = ({ children, count }: CounterHeadingProps) => {
  return <CounterHeadingElement count={count}>{children}</CounterHeadingElement>;
};
