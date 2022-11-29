import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { icons } from 'assets/icons';
import { Navbar, LinkElement } from 'components';
import { useScrollDirection, useScrollToElementById } from 'hooks';
import { hexToRgb } from 'utils';

const Link = styled.span`
  cursor: pointer;
`;

const HeaderW = styled.header<{ isHide: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  align-items: center;
  background-color: rgba(${({ theme }) => hexToRgb(theme.colors.bg)}, 0.9);
  z-index: ${({ theme }) => theme.zIndex.header};
  transition: ${({ theme }) => theme.transition};
  transform: translateY(${({ isHide }) => (isHide ? '-80px' : '0px')});

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  ${LinkElement} {
    margin-left: 15px;
    padding: 5px 10px;
    height: min-content;
    font-size: 15px;

    @media ${({ theme }) => theme.devices.tablet} {
      margin-left: 0;
    }
  }
`;

const Logo = styled.div`
  ${LinkElement} {
    padding: 10px;
  }
  svg {
    stroke: ${({ theme }) => theme.colors.main};
    width: 40px;
    height: 40px;
    display: block;
    color: ${({ theme }) => theme.colors.main};
  }
`;

export function Header(): ReactElement {
  const { direction } = useScrollDirection();
  const { handleScroll } = useScrollToElementById();

  const handleLogoClick = () => setTimeout(() => handleScroll('hero'), 0);

  return (
    <HeaderW isHide={direction === 'down'}>
      <Logo>
        <NavLink to="/">
          <Link onClick={handleLogoClick}>{icons.logo}</Link>
        </NavLink>
      </Logo>
      <Menu>
        <Navbar />
      </Menu>
    </HeaderW>
  );
}
