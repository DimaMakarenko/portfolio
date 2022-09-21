import { COLORS } from './colors';
import { devices } from './sizes';

export const theme = {
  colors: {
    darkBg: COLORS.green100,
    bg: COLORS.white100,
    lightBg: COLORS.white200,
    lightestNavy: COLORS.green500,
    text: COLORS.green600,
    secondText: COLORS.purple300,
    main: COLORS.purple400,
    lightMain: COLORS.purple500,
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
