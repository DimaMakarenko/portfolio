import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as GitHub } from 'assets/icons/github.svg';
import { ReactComponent as Gmail } from 'assets/icons/gmail.svg';
import { ReactComponent as LinkedIn } from 'assets/icons/linkedin.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';
import { Side } from 'components';
import { config } from 'config';

const SocialSideW = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      display: block;

      svg {
        stroke: ${({ theme }) => theme.colors.lightestSlate};
        transition: ${({ theme }) => theme.transition};

        &:hover {
          stroke: ${({ theme }) => theme.colors.green};
        }
        width: 20px;
        height: 20px;

        &:hover,
        &:focus {
          transform: translateY(-3px);
        }
      }
    }
  }
`;

export const SocialSide = (): ReactElement => {
  const links = [
    { url: config.socials.github, icon: <GitHub /> },
    { url: config.socials.telegram, icon: <Telegram /> },
    { url: config.socials.linkedIn, icon: <LinkedIn /> },
    { url: config.socials.gmail, icon: <Gmail /> },
  ];

  return (
    <Side>
      <SocialSideW>
        {links.map(({ url, icon }) => (
          <li key={url}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </SocialSideW>
    </Side>
  );
};
