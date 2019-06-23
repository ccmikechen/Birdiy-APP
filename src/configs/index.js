import Constants from 'expo-constants';
import * as FacebookAds from 'expo-ads-facebook';
import {
  FACEBOOK_APP_ID,
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_EXPO_CLIENT_ID,
  IOS_EXPO_CLIENT_ID,
} from 'react-native-dotenv';
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
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_EXPO_CLIENT_ID,
  IOS_EXPO_CLIENT_ID,
});

if (ENV === 'development') {
  FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
}

export default CHANNEL_CONFIGS;
