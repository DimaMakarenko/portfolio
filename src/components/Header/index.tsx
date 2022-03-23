import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { Navbar } from 'components';
import { hexToRgb } from 'utils';

const HeaderW = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  align-items: center;
  background-color: rgba(${({ theme }) => hexToRgb(theme.colors.navy)}, 0.9);
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export function Header(): ReactElement {
  return (
    <HeaderW>
      <span>Icon</span>
      <Navbar />
    </HeaderW>
  );
}
