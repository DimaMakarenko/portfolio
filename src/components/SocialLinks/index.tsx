import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Link } from 'components';
import { socialLinks } from 'content';

export const SocialLinksW = styled.ul`
  display: flex;
`;

export function SocialLinks(): ReactElement {
  return (
    <SocialLinksW>
      {socialLinks.map(({ url, iconName }) => (
        <li key={url}>
          <Link href={url} iconName={iconName} />
        </li>
      ))}
    </SocialLinksW>
  );
}
