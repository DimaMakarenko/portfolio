import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Side } from 'components';
import { config } from 'config';

const Letter = styled.span`
  padding: 3px;
`;
const Letters = styled.a`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  padding-bottom: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    transform: translateY(-3px);
  }
`;

export function RightSide(): ReactElement {
  const resume = 'resume'.split(''); // resume

  return (
    <Side position="right">
      <Letters href={config.docResume} target="_blank">
        {resume.map((word, index) => (
          <Letter key={index}>{word}</Letter>
        ))}
      </Letters>
    </Side>
  );
}
