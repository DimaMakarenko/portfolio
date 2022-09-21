import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';

export const CodeW = styled.code`
  position: relative;
  display: inline-block;
  font-family: 'Inconsolata', monospace;
  font-size: 0.9em;
  padding: 6px 8px;
  margin: 1px -1px;
  background-color: #f0f0f4;
  border-radius: 3px;
`;

interface CodeProps {
  children?: ReactNode;
}

export function Code({ children }: CodeProps): ReactElement {
  return <CodeW>{children}</CodeW>;
}
