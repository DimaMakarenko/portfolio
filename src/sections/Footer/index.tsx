import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { icons } from 'assets/icons';
import { config } from 'config';

const FooterW = styled.footer`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const StarsW = styled.span`
  margin-top: 5px;
  display: flex;
  align-items: center;

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

type GitInfoState = {
  stars: number;
};

export function Footer(): ReactElement {
  const [githubInfo, setGitHubInfo] = useState<GitInfoState>({
    stars: 0,
  });

  useEffect(() => {
    fetch(config.gitRepoAPI)
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count } = json;

        setGitHubInfo({
          stars: stargazers_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <FooterW className="code">
      <p>Built by Dima Makarenko</p>
      <StarsW>
        {icons.star}
        <span>{githubInfo.stars.toLocaleString()}</span>
      </StarsW>
    </FooterW>
  );
}
