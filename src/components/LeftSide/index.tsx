import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Side, Link } from 'components';
import { socialLinks } from 'content';

const LeftSideW = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`;

export const LeftSide = (): ReactElement => {
  return (
    <Side>
      <LeftSideW>
        {socialLinks.map(({ url, iconName }) => (
          <li key={url}>
            <Link href={url} iconName={iconName} />
          </li>
        ))}
      </LeftSideW>
    </Side>
  );
};
