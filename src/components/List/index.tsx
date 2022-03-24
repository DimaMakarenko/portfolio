import { ReactElement } from 'react';
import styled from 'styled-components/macro';

interface ListProps {
  data: string[];
  columns?: number;
}

const Ul = styled.ul<Pick<ListProps, 'columns'>>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(min-content, max-content));
  gap: 5px 40px;
`;

const Li = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 15px;

  &:before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const List = ({ data, columns }: ListProps): ReactElement => {
  return (
    <Ul columns={columns} className="code">
      {data.map((item, index) => (
        <Li key={index}>{item}</Li>
      ))}
    </Ul>
  );
};
