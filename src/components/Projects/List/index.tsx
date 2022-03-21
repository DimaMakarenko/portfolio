import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Projects } from 'types';

import { ProjectCard } from '../Card';

const ProjectListW = styled.ul`
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

interface ProjectList {
  projects: Projects;
}

export function ProjectList({ projects }: ProjectList): ReactElement {
  return (
    <ProjectListW>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ProjectListW>
  );
}
