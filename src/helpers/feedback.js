import { Platform } from 'react-native';
import Constants from 'expo-constants';
import sendgrid from './sendgrid';

import config from '../configs';

sendgrid.setApiKey(config.SENDGRID_APIKEY);

const defaultMsg = {
  to: 'hi@birdiy.com',
  from: 'feedback@birdiy.com',
  subject: 'Birdiy APP Feedback',
};

const parseMail = (type, message) => ({
  ...defaultMsg,
  text: `
Type: ${type}\n
\n
Message:\n
${message}\n
\n
--------------------------------\n
Device ID: ${Constants.deviceId}\n
Device Name: ${Constants.deviceName}\n
IP: ${Constants.manifest.hostUri}\n
Platform: ${Platform.OS} ${Constants.systemVersion}\n
`,
});

export default {
  send: (type, message) => {
    const mail = parseMail(type, message);

    return sendgrid.send(mail);
  },
};
