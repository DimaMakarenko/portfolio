export const theme = {
  colors: {
    navy: '#0a192f',
    lightNavy: '#64ffda',
    slate: '#8892b0',
    lightestSlate: '#ccd6f6',
    green: '#64ffda',
    greenTint: 'rgba(100,255,218,0.1)',
  },
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  borderRadius: '4px',
  zIndex: {
    side: 10,
  },
};

export type ThemeType = typeof theme;
