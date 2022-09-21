import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Side, SocialLinks } from 'components';
import { SocialLinksW } from 'components/SocialLinks';

const LeftSideW = styled.div`
  ${SocialLinksW} {
    align-items: center;
    flex-direction: column;

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
`;

export const LeftSide = (): ReactElement => {
  return (
    <Side>
      <LeftSideW>
        <SocialLinks />
      </LeftSideW>
    </Side>
  );
};
