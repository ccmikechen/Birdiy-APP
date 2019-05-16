import { AsyncStorage } from 'react-native';
import { Localization } from 'expo';
import i18n from 'i18n-js';

import zhTW from './zh-TW';
import ja from './ja';
import en from './en';

export const setAppLocale = async (locale) => {
  const result = await AsyncStorage.setItem('locale', locale);

  return result;
};

export const getAppLocale = async () => {
  const locale = await AsyncStorage.getItem('locale');

  if (locale) {
    return locale;
  }

  const systemLocale = Localization.locale;
  await setAppLocale(systemLocale);

  return systemLocale;
};

export const initI18n = async () => {
  i18n.fallbacks = true;
  i18n.translations = {
    'zh-TW': zhTW,
    ja,
    en,
  };
  i18n.defaultLocale = 'en';
  i18n.locale = await getAppLocale();
};
