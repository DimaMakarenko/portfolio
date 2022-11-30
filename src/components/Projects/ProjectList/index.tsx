import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Projects } from 'types';

import { Project } from '../Project';

const ProjectListW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ProjectList {
  projects: Projects;
}

export function ProjectList({ projects }: ProjectList): ReactElement {
  const sortedList = projects.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return (
    <ProjectListW>
      <ul>
        {sortedList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ul>
    </ProjectListW>
  );
}
