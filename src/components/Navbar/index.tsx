import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { navLinks } from 'content';
import { useScrollToElementById } from 'hooks';

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

const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
`;

export function Navbar(): ReactElement {
  const { handleScroll } = useScrollToElementById();

  return (
    <NavbarW>
      <Menu>
        {navLinks.map(({ title, url, id }) => (
          <MenuItem key={id}>
            <Link href={url} onClick={() => handleScroll(id)}>
              {title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </NavbarW>
  );
}
