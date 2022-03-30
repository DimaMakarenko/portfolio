import { devices } from './sizes';

export const theme = {
  colors: {
    darkBg: '#D8E9F3',
    bg: '#F4F9FC',
    lightestNavy: '#233554',
    text: '#0F1B61',
    secondText: '#A088B1',
    main: '#7F00E0',
    lightMain: 'rgba(127, 0, 224, 0.1)',
  },
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  zIndex: {
    blur: 1,
    side: 10,
    header: 11,
    iconLoader: 15,
  },
  tabs: {
    height: 42,
  },
  sizes: {
    maxWidth: 1500,
  },
  screenSizes: {
    tablet: '768px',
    laptop: '1100px',
  },
  devices,
};

export type ThemeType = typeof theme;
