import { ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { navLinks } from 'content';
import { useScrollToElementById } from 'hooks';

const MenuW = styled.nav`
  height: 80px;
  display: flex;

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
    height: auto;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarW = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  ${({ isMenuOpen }) => {
    if (isMenuOpen) {
      return css`
        position: absolute;
        right: 0;
        top: 0;
        width: 70vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.darkBg};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${MenuW} {
          display: flex;
        }
        ${Menu} {
          align-items: center;
          flex-direction: column;
        }
      `;
    }
  }}
`;

const MenuItem = styled.li`
  font-size: 15px;
  margin: 0px 5px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 20px;
    margin: 15px 0;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
`;

const BurgerBox = styled.span`
  height: 3px;
  width: 30px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.main};
`;

const MenuBurger = styled.button<{ isMenuOpen: boolean }>`
  display: none;

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
    height: 20px;
    width: 30px;
    top: 20px;
    right: 20px;
    background-color: transparent;
    position: fixed;
    padding: 22px;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(
      ${({ isMenuOpen }) => (isMenuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.main};
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 2px;
  }
  &:before {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '21px' : '10px')};
    width: ${({ isMenuOpen }) => (isMenuOpen ? '30px' : '36px')};
    transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? `225deg` : `0deg`)});
  }
  &:after {
    bottom: ${({ isMenuOpen }) => (isMenuOpen ? '20px' : '10px')};
    width: ${({ isMenuOpen }) => (isMenuOpen ? '30px' : '24px')};
    transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? `-45deg` : `0deg`)});
  }

  ${BurgerBox} {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'flex')};
  }
`;

export function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const { handleScroll } = useScrollToElementById();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (id: string) => {
    handleScroll(id);
    setIsMenuOpen(false);
    document.body.classList.remove('blur');
  };

  useEffect(() => {
    document.body.classList.toggle('blur', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <NavbarW isMenuOpen={isMenuOpen}>
      <MenuW>
        <Menu>
          {navLinks.map(({ title, url, id }) => (
            <MenuItem key={id}>
              <Link href={url} onClick={() => handleLinkClick(id)}>
                {title}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </MenuW>
      <MenuBurger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <BurgerBox></BurgerBox>
      </MenuBurger>
    </NavbarW>
  );
}
