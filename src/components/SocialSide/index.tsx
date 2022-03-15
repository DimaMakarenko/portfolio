import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Side } from 'components';
import { Link } from 'components/Link';
import { socialLinks } from 'content';

const SocialSideW = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`;

export const SocialSide = (): ReactElement => {
  return (
    <Side>
      <SocialSideW>
        {socialLinks.map(({ url, iconName }) => (
          <li key={url}>
            <Link href={url} iconName={iconName} />
          </li>
        ))}
      </SocialSideW>
    </Side>
  );
};
