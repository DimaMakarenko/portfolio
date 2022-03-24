import { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';

import { Link } from 'components';
import { Projects } from 'types';

import { ProjectCard } from '../Card';

const ListW = styled.ul`
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

const ProjectListW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkW = styled.div`
  margin: 80px auto 0px;
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
