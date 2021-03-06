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
  darker: '#b0b0b0',
  darkest: '#707070',
  light: '#f8f8f8',
  lighter: '#fbfbfb',
  lightest: '#ffffff',
};

export const TextColor = {
  primaryLight: '#ffffff',
  subLight: '#eeeeee',
  sectionTitle: '#444444',
  primaryDark: '#222222',
  secondaryDark: '#444444',
  subDark: '#888888',
  disabled: '#aaaaaa',
};

export const Primary = Material('blue');
export const Secondary = Material('indigo');
export const Tertiary = Material('blueGray');

export default {
  appIcon: '#003991',
  tabIconDefault: '#cccccc',
  tabIconSelected: Secondary(500),
  tabBar: '#fefefe',
  headerGradient: ['#65b1bc', '#3b7998', Secondary(500)],
  headerIcon: '#444444',
  activeHeaderIcon: Primary(700),
  placeholder: '#cccccc',
  closeButton: '#ff0000',
  publish: '#4caf50',
  unpublish: '#c62828',
  divider: '#dfdfdf',
  like: '#c62828',
  publishedStatus: '#008800',
  draftStatus: '#666666',
  followButton: Primary(700),
  coverModalBackground: 'rgba(0, 0, 0, .8)',
  logoutButton: '#cc0000',
  loginButton: Primary(900),
  settingBorder: '#c8c7cc',
  danger: '#ff0000',
  defaultMessage: '#858fa0',
  viewsIcon: '#4caf50',
  facebook: '#3b5998',
  homeSectionDark: '#ebeff5',
  commentMessage: '#666680',
};
