import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { icons } from 'assets/icons';
import { Link, Navbar, LinkElement } from 'components';
import { config } from 'config';
import { useScrollDirection } from 'hooks';
import { hexToRgb } from 'utils';

const HeaderW = styled.header<{ isHide: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  align-items: center;
  background-color: rgba(${({ theme }) => hexToRgb(theme.colors.aqua)}, 0.9);
  z-index: ${({ theme }) => theme.zIndex.header};
  transition: ${({ theme }) => theme.transition};
  transform: translateY(${({ isHide }) => (isHide ? '-80px' : '0px')});
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  ${LinkElement} {
    margin-left: 15px;
    padding: 5px 10px;
    height: min-content;
    font-size: 15px;
  }
`;
const Logo = styled.div`
  ${LinkElement} {
    padding: 10px;
  }
  svg {
    stroke: ${({ theme }) => theme.colors.violet};
    width: 40px;
    height: 40px;
    display: block;
    color: ${({ theme }) => theme.colors.violet};
  }
`;

export function Header(): ReactElement {
  const { direction } = useScrollDirection();

  return (
    <HeaderW isHide={direction === 'down'}>
      <Logo>
        <Link variant="basic" href="/portfolio/#">
          {icons.logo}
        </Link>
      </Logo>
      <Menu>
        <Navbar />
        <Link variant="button" href={config.docResume} target="_blank">
          Resume
        </Link>
      </Menu>
    </HeaderW>
  );
}
