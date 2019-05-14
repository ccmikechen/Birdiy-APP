import { Constants } from 'expo';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import * as DEV from './dev';
import * as STAGING from './staging';
import * as PROD from './prod';

const CONFIGS = {
  devlopment: DEV,
  default: STAGING,
  staging: STAGING,
  production: PROD,
};

const ENV = Constants.manifest.releaseChannel || 'devlopment';
const CHANNEL_CONFIGS = Object.freeze({
  ...CONFIGS[ENV],
  FACEBOOK_APP_ID,
});

export default CHANNEL_CONFIGS;
