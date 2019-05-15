import { Localization } from 'expo';
import i18n from 'i18n-js';

import zhTW from './zh-TW';
import en from './en';

i18n.fallbacks = true;
i18n.translations = {
  'zh-TW': zhTW,
  en,
};
i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;
