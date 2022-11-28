import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Side } from 'components';
import { config } from 'config';

const Letter = styled.span<{ delay: number }>`
  padding: 3px;
  transition-delay: ${({ delay }) => `${delay}ms`};
`;

const Letters = styled.a`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  padding-bottom: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.main};
    transform: translateY(-3px);
    font-weight: 600;
  }
`;

export function RightSide(): ReactElement {
  const resume = 'resume'.split('');

  return (
    <Side position="right">
      <Letters href={config.docResume} target="_blank">
        {resume.map((word, index) => (
          <Letter key={index} delay={index * 70}>
            {word}
          </Letter>
        ))}
      </Letters>
    </Side>
  );
}
