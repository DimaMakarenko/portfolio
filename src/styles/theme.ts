export const theme = {
  colors: {
    navy: '#0a192f',
    lightNavy: '#112240',
    lightestNavy: '#233554',
    slate: '#8892b0',
    lightestSlate: '#ccd6f6',
    green: '#64ffda',
    greenTint: 'rgba(100,255,218,0.1)',
  },
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  borderRadius: '4px',
  zIndex: {
    side: 10,
    header: 11,
  },
  tabs: {
    height: 42,
  },
  sizes: {
    maxWidth: 1500,
  },
};

export type ThemeType = typeof theme;
