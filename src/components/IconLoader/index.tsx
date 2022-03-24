/* eslint-disable import/no-named-as-default-member */
import anime from 'animejs';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { icons } from 'assets/icons';

const IconLoaderW = styled.div<{ isMounted: boolean }>`
  height: 100vh;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.iconLoader};
  background-color: ${({ theme }) => theme.colors.darkNavy};
  position: fixed;
  align-items: center;
  justify-content: center;
  display: ${({ isMounted }) => (isMounted ? 'none' : 'flex')};

  svg {
    width: 80px;
    height: 80px;
    color: ${({ theme }) => theme.colors.green};
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;

    #initials {
      opacity: 0;
    }
  }
`;

export function IconLoader(): ReactElement {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => setIsMounted(true),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 100,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #initials',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return <IconLoaderW isMounted={isMounted}>{icons.logoLoader}</IconLoaderW>;
}
