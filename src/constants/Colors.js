const MATERIAL_COLORS = {
  blue: {
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },
  indigo: {
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5',
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
  },
  bluegray: {
    100: '#CFD8DC',
    200: '#B0BEC5',
    300: '#90A4AE',
    400: '#78909C',
    500: '#607D8B',
    600: '#546E7A',
    700: '#455A64',
    800: '#37474F',
    900: '#263238',
  },
};

export const Material = (color) => {
  const colors = MATERIAL_COLORS[color.toLowerCase()];
  return level => colors[level];
};

export const Base = {
  dark: '#e1e1e1',
  light: '#f5f5f5',
  lightest: '#ffffff',
};

export const TextColor = {
  primaryLight: '#ffffff',
  subLight: '#eeeeee',
  sectionTitle: '#666666',
};

export const Primary = Material('blue');
export const Secondary = Material('indigo');
export const Tertiary = Material('blueGray');

export default {
  tabIconDefault: '#cccccc',
  tabIconSelected: '#3b5998',
  tabBar: '#fefefe',
};
