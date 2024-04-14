export const colorPalette = {
  shark: {
    code: 'shark',
    color: '#212529',
  },
  conflowerBlue: {
    code: 'conflowerBlue',
    color: '#845EF7',
  },
  pictonBlue: {
    code: 'pictonBlue',
    color: '#339AF0',
  },
  java: {
    code: 'java',
    color: '#22B8CF',
  },
  emerald: {
    code: 'emerald',
    color: '#51CF66',
  },
  lightningYellow: {
    code: 'lightningYellow',
    color: '#FCC419',
  },
  bittersweet: {
    code: 'bittersweet',
    color: '#FF6B6B',
  },
  froly: {
    code: 'froly',
    color: '#F06595',
  },
  ghost: {
    code: 'ghost',
    color: '#CED4DA',
  },
  purpleHeart: {
    code: 'purpleHeart',
    color: '#5F3DC4',
  },
  funBlue: {
    code: 'funBlue',
    color: '#1864AB',
  },
  surfieGreen: {
    code: 'surfieGreen',
    color: '#0B7285',
  },
  seaGreen: {
    code: 'seaGreen',
    color: '#2B8A3E',
  },
  mangoTango: {
    code: 'mangoTango',
    color: '#E67700',
  },
  persianRed: {
    code: 'persianRed',
    color: '#C92A2A',
  },
  maroonFlush: {
    code: 'maroonFlush',
    color: '#C2255C',
  },
};

export const getColors = () => {
  return Object.values(colorPalette);
};

export const hasColor = (code: string) => {
  return code in colorPalette;
};

export const getColorByCode = (code: string) => {
  return colorPalette[code as keyof typeof colorPalette]?.color ?? null;
};
