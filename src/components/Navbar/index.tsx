import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { navLinks } from 'content';
import { scrollToElementById } from 'hooks';

const NavbarW = styled.nav`
  height: 80px;
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  font-size: 15px;
  margin: 0px 5px;
`;

const Link = styled.a<{ count: number }>`
  color: ${({ theme }) => theme.colors.lightestSlate};
  padding: 10px;

  &:before {
    content: '0${({ count }) => count}.';
    position: relative;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Inconsolata', monospace;
  }
`;

export function Navbar(): ReactElement {
  const { handleScroll } = scrollToElementById();

  return (
    <NavbarW>
      <Menu>
        {navLinks.map(({ title, url, id }, index) => (
          <MenuItem key={index}>
            <Link href={url} onClick={() => handleScroll(id)} count={index + 1}>
              {title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </NavbarW>
  );
}
