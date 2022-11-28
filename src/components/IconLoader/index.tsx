/* eslint-disable import/no-named-as-default-member */
import anime from 'animejs';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { icons } from 'assets/icons';

const IconLoaderW = styled.div<{ isMounted: boolean }>`
  height: 100vh;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.iconLoader};
  background-color: ${({ theme }) => theme.colors.darkBg};
  position: fixed;
  align-items: center;
  justify-content: center;
  display: ${({ isMounted }) => (isMounted ? 'none' : 'flex')};

  svg {
    width: 80px;
    height: 80px;
    color: ${({ theme }) => theme.colors.main};
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;

    #initials {
      opacity: 0;
    }
  }
`;

const ANIMATION_DURATION = 2800;

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
        duration: 1200,
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
    document.body.style.overflowY = 'hidden';
    animate();

    const timer = setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return <IconLoaderW isMounted={isMounted}>{icons.logoLoader}</IconLoaderW>;
}
