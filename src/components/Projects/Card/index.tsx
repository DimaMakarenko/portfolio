import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as FolderIcon } from 'assets/icons/folder.svg';
import { Link } from 'components';
import { Project } from 'types';

const Title = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.arapawa};
  margin: 10px 0px 10px;
`;
const Description = styled.p`
  font-size: 18px;
  text-align: justify;
`;

const Technologies = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  font-size: 16px;
  margin-top: 20px;
`;
const Folder = styled.div`
  svg {
    width: 34px;
    height: 34px;
  }
`;

const ProjectCardW = styled.li`
  background-color: ${({ theme }) => theme.colors.darkAqua};
  padding: 2rem 1.75rem;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    ${Folder} {
      svg {
        stroke: ${({ theme }) => theme.colors.violet};
        transition: ${({ theme }) => theme.transition};
      }
    }
    ${Title} {
      color: ${({ theme }) => theme.colors.violet};
    }
  }
`;
const TechnologyItem = styled.li`
  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: relative;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: ${({ theme }) => theme.colors.slate};
    display: block;
  }

  &:last-of-type {
    &:after {
      content: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10pxx;
`;

const Links = styled.div``;

export function ProjectCard({
  title,
  description,
  technologies,
  url,
  sourceUrl,
}: Project): ReactElement {
  return (
    <ProjectCardW>
      <Header>
        <Folder>
          <FolderIcon />
        </Folder>
        <div>
          {url && <Link iconName="external" href={url} target="_blank" />}
          {sourceUrl && <Link iconName="github" href={sourceUrl} target="_blank" />}
        </div>
      </Header>
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </div>

      <Technologies className="code">
        {technologies.map((technology, index) => (
          <TechnologyItem key={index}>{technology}</TechnologyItem>
        ))}
      </Technologies>
    </ProjectCardW>
  );
}
