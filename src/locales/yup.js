import { setLocale } from 'yup';
import i18n from 'i18n-js';

export default () => {
  setLocale({
    mixed: {
      required: i18n.t('errors.required'),
    },
  });
};
