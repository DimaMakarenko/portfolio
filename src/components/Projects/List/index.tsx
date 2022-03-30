import { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';

import { Link } from 'components';
import { Projects } from 'types';

import { ProjectCard } from '../Card';

const ListW = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 20px;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProjectListW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkW = styled.div`
  margin: 80px auto 0px;

  @media ${({ theme }) => theme.devices.tablet} {
    margin: 50px auto 0px;
  }
`;

interface ProjectList {
  projects: Projects;
}

export function ProjectList({ projects }: ProjectList): ReactElement {
  const [isShowFullList, setIsShowFullList] = useState<boolean>(false);

  // First 6 projects in list
  const shortProjectsList = projects.slice(0, 6);

  const handleShowClick = () => setIsShowFullList((prev) => !prev);

  const displayedList = isShowFullList ? projects : shortProjectsList;

  return (
    <ProjectListW>
      <ListW>
        {displayedList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ListW>
      <LinkW>
        <Link variant="button" onClick={handleShowClick}>
          Show {isShowFullList ? 'Less' : 'More'}
        </Link>
      </LinkW>
    </ProjectListW>
  );
}
