/* eslint-disable global-require */

export const ICON = require('./icon.png');
export const SPLASH = require('./splash.png');
export const LOGO = require('./logo.png');

export const CATEGORIES = {
  Circuits: require('./categories/circuits.png'),
  Craft: require('./categories/craft.png'),
  Living: require('./categories/living.png'),
  Outside: require('./categories/outside.png'),
  Science: require('./categories/science.png'),
  Workshop: require('./categories/workshop.png'),
};

export const FACEBOOK_ICON = require('./facebook-icon.png');
export const GOOGLE_ICON = require('./google-icon.png');

export const preloadImages = [
  ICON,
  SPLASH,
  LOGO,
  ...Object.values(CATEGORIES),
  FACEBOOK_ICON,
  GOOGLE_ICON,
];
