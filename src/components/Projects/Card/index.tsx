import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as FolderIcon } from 'assets/icons/folder.svg';
import { Link } from 'components';
import { Project } from 'types';

const Title = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin: 0px 0px 10px;
`;
const Description = styled.p``;
const Technologies = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: 20px 0px 0px;
  font-size: 16px;
`;
const Folder = styled.div`
  svg {
    width: 36px;
    height: 36px;
  }
`;

const ProjectCardW = styled.li`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 2rem 1.75rem;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    ${Folder} {
      svg {
        stroke: ${({ theme }) => theme.colors.green};
      }
    }
    ${Title} {
      color: ${({ theme }) => theme.colors.green};
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
        <Links>
          {url && <Link iconName="external" href={url} />}
          {sourceUrl && <Link iconName="github" href={sourceUrl} />}
        </Links>
      </Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Technologies>
        {technologies.map((technology, index) => (
          <TechnologyItem key={index}>{technology}</TechnologyItem>
        ))}
      </Technologies>
    </ProjectCardW>
  );
}
