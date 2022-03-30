import { ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { SocialLinks } from 'components';
import { SocialLinksW } from 'components/SocialLinks';
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

const BlurW = styled.div<{ isMenuOpen: boolean }>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'inline' : 'none')};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  backdrop-filter: blur(2px);
  z-index: ${({ theme }) => theme.zIndex.blur};
`;

const NavbarW = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  z-index: ${({ theme }) => theme.zIndex.header};

  ${SocialLinksW} {
    display: none;
  }

  ${({ isMenuOpen }) => {
    if (isMenuOpen) {
      return css`
        position: absolute;
        right: 0;
        top: 0;
        width: 60vw;
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
        ${SocialLinksW} {
          display: flex;
          position: absolute;
          bottom: 30px;
          li {
            padding: 10px;
          }
        }
      `;
    }
  }}
`;

const MenuItem = styled.li`
  font-size: 15px;
  margin: 0px 5px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 22px;
    margin: 20px 0;
    letter-spacing: 1.1;
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
  right: 6px;
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
    right: 6px;
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { handleScroll } = useScrollToElementById();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('blur');
  };
  const handleLinkClick = (id: string) => {
    handleScroll(id);
    handleCloseMenu();
  };

  useEffect(() => {
    document.body.classList.toggle('blur', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <BlurW isMenuOpen={isMenuOpen} onClick={handleCloseMenu} />
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
        <SocialLinks />
      </NavbarW>
    </>
  );
}
