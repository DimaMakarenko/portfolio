import { ReactElement } from 'react';
import styled from 'styled-components/macro';

interface ListProps {
  data: string[];
}

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, max-content));
  gap: 5px 40px;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, minmax(min-content, max-content));
  }
`;

const Li = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 17px;

  &:before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const List = ({ data }: ListProps): ReactElement => {
  return (
    <Ul className="code">
      {data.map((item, index) => (
        <Li key={index}>{item}</Li>
      ))}
    </Ul>
  );
};
