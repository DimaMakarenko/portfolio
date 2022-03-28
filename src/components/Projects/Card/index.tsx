import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Link, Code } from 'components';
import { CodeW } from 'components/Code';
import { Project } from 'types';
import { hexToRgb } from 'utils';

const Title = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px 0px 10px;
`;
const Description = styled.p`
  font-size: 18px;
  text-align: justify;
`;

const DescriptionW = styled.div`
  margin: 10px 0 auto;
`;

const Technologies = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 16px;

  ${CodeW} {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const ProjectCardW = styled.li`
  background: linear-gradient(
    to bottom,
    rgba(${({ theme }) => hexToRgb(theme.colors.darkBg)}, 0.8) 0%,
    ${({ theme }) => theme.colors.bg} 100%
  );

  padding: 2rem 1.75rem;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:after {
    content: '';
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

export function ProjectCard({
  title,
  description,
  technologies,
  url,
  sourceUrl,
}: Project): ReactElement {
  return (
    <ProjectCardW>
      <Technologies className="code">
        {technologies.map((technology, index) => (
          <Code key={index}>{technology}</Code>
        ))}
      </Technologies>

      <DescriptionW>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </DescriptionW>
      <Footer>
        {url && <Link iconName="external" href={url} target="_blank" />}
        {sourceUrl && <Link iconName="github" href={sourceUrl} target="_blank" />}
      </Footer>
    </ProjectCardW>
  );
}
