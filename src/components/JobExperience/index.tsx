import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Link, Typography } from 'components';
import { theme } from 'styles';
import { Job } from 'types';
import { listToCommaSeparated } from 'utils';

const Title = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 22px;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 18px;
  }
`;

const Period = styled.p`
  font-size: 16px;
  margin: 5px 0 20px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 15px;
    margin: 5px 0 15px;
  }
`;

const Block = styled.div`
  display: flex;
  font-size: 17px;
  margin: 5px 0 14px;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 5px 20px;

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: 14px;
    grid-template-columns: 110px 1fr;
  }
`;

const BlockHeader = styled.p`
  color: ${({ theme }) => theme.colors.text};
  height: min-content;
  text-align: right;
  white-space: nowrap;

  & > span {
    position: relative;
    padding-bottom: 3px;

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.main};
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &:after {
      content: ':';
    }
  }
`;

export function JobExperience({
  companyName,
  projectRole,
  companyUrl,
  period,
  responsibilities,
  technologies,
  projectTeamSize,
  description,
}: Job): ReactElement {
  return (
    <div>
      <Title>
        <Typography color={theme.colors.text}>{projectRole}</Typography>
        {companyUrl && (
          <>
            <Typography>&nbsp;at&nbsp;</Typography>
            <Link href={companyUrl}>{companyName}</Link>
          </>
        )}
      </Title>
      <Period className="code">
        {period.start} - {period.end}
      </Period>
      {description && (
        <Block>
          <BlockHeader>
            <span>Projects</span>
          </BlockHeader>
          <span className="code">{description}</span>
        </Block>
      )}

      <Block>
        <BlockHeader>
          <span>Technologies</span>
        </BlockHeader>
        <span className="code">{listToCommaSeparated(technologies)}</span>
      </Block>
      {responsibilities && (
        <Block>
          <BlockHeader>
            <span>Responsibilities</span>
          </BlockHeader>
          <span className="code">{responsibilities}</span>
        </Block>
      )}

      {projectTeamSize && (
        <Block>
          <BlockHeader>
            <span>Teams Size</span>
          </BlockHeader>
          <span className="code">{projectTeamSize}</span>
        </Block>
      )}
    </div>
  );
}
