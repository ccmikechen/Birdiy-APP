/* eslint-disable prefer-destructuring */

import { AsyncStorage } from 'react-native';
import { Localization } from 'expo';
import i18n from 'i18n-js';

import zhTW from './zh-TW';
import ja from './ja';
import en from './en';

import initYup from './yup';

class Locale {
  init = async () => {
    i18n.fallbacks = true;
    i18n.translations = {
      'zh-TW': zhTW,
      ja,
      en,
    };
    i18n.defaultLocale = 'en';

    let locale = await AsyncStorage.getItem('locale');
    if (!locale) {
      locale = Localization.locale;
      await this.setAppLocale(locale);
    }
    i18n.locale = locale;
    this.locale = locale;

    initYup();
  };

  setAppLocale = async (locale) => {
    const result = await AsyncStorage.setItem('locale', locale);

    return result;
  };

  getAppLocale = () => this.locale;
}

export default new Locale();
