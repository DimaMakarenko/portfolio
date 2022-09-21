import { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';

// import { Link } from 'components';
import { Projects } from 'types';

import { Project } from '../Project';

const ProjectListW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const LinkW = styled.div`
//   margin: 80px auto 0px;

//   @media ${({ theme }) => theme.devices.tablet} {
//     margin: 50px auto 0px;
//   }
// `;

interface ProjectList {
  projects: Projects;
}

export function ProjectList({ projects }: ProjectList): ReactElement {
  const displayedList = projects.slice(0, 5);

  return (
    <ProjectListW>
      <ul>
        {displayedList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ul>
      {/* <LinkW>
        <Link variant="button">Show More</Link>
      </LinkW> */}
    </ProjectListW>
  );
}
