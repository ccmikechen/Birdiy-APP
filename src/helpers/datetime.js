import { Localization } from 'expo';
import moment from 'moment-timezone';

import 'moment/locale/ja';
import 'moment/locale/zh-tw';

const { timezone } = Localization;
const locale = Localization.locale.toLowerCase();
moment.locale(locale);

export const localDatetime = datetime => (
  moment(datetime * 1000)
    .tz(timezone)
    .locale(locale)
    .format('lll')
);

export const timeAgo = (datetime) => {
  const m = moment(datetime * 1000);
  const diffHours = (new Date() - m) / 3600000;

  if (diffHours >= 24) {
    return localDatetime(datetime);
  }

  return m.fromNow();
};
