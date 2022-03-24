import { useState, useEffect, useCallback } from 'react';

type ScrollState = {
  position: number;
  direction: 'down' | 'up';
};

interface UseHeaderHidingReturn {
  direction: ScrollState['direction'];
}

export function useScrollDirection(): UseHeaderHidingReturn {
  const [scroll, setScroll] = useState<ScrollState>({
    position: window.pageYOffset,
    direction: 'up',
  });

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.pageYOffset;
    const direction: ScrollState['direction'] =
      scroll.position > currentScrollPosition ? 'up' : 'down';

    setScroll({ position: currentScrollPosition, direction });
  }, [scroll.position]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    direction: scroll.direction,
  };
}
