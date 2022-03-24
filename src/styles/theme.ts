export const theme = {
  colors: {
    darkAqua: '#D8E9F3',
    aqua: '#F4F9FC',
    lightestNavy: '#233554',
    slate: '#0F1B61',
    arapawa: '#0F1B61',
    violet: '#7F00E0',
    glacier: '#73BBC5',
    lightViolet: 'rgba(127, 0, 224, 0.1)',
  },
  transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  borderRadius: '4px',
  zIndex: {
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
};

export type ThemeType = typeof theme;
