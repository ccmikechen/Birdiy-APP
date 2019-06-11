import Toast from 'react-native-root-toast';
import i18n from 'i18n-js';

import { Tertiary } from '../constants/Colors';

export const showMessage = (message, options = {}) => (
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: -80,
    shadow: true,
    aniamtion: true,
    hideOnPress: true,
    backgroundColor: Tertiary(800),
    delay: 0,
    ...options,
  })
);

export const showError = (message, options = {}) => (
  showMessage(message, {
    backgroundColor: '#b71c1c',
    ...options,
  })
);

export const showSaveProjectSuccessMessage = () => (
  showMessage(i18n.t('alert.saveProjectSuccess'))
);

export const showSaveProjectFailedMessage = () => (
  showError(i18n.t('alert.saveProjectFailed'))
);

export const showUnpublishProjectSuccessMessage = () => (
  showMessage(i18n.t('alert.unpublishProjectSuccess'))
);

export const showSetProjectStatusFailedMessage = () => (
  showError(i18n.t('alert.setProjectStatusFailed'))
);

export const showDeleteProjectFailedMessage = () => (
  showError(i18n.t('alert.deleteProjectFailed'))
);

export const showCreatePostSuccessMessage = () => (
  showMessage(i18n.t('alert.createPostSuccess'))
);

export const showCreatePostFailedMessage = () => (
  showError(i18n.t('alert.createPostFailed'))
);

export const showEditPostSuccessMessage = () => (
  showMessage(i18n.t('alert.editPostSuccess'))
);

export const showEditPostFailedMessage = () => (
  showError(i18n.t('alert.editPostFailed'))
);

export const showDeletePostFailedMessage = () => (
  showError(i18n.t('alert.deletePostFailed'))
);

export const showEditProfileFailedMessage = () => (
  showError(i18n.t('alert.editProfileFailed'))
);

export const showLoginFailedMessage = () => (
  showError(i18n.t('alert.loginFailed'))
);

export const showSendFeedbackSuccessMessage = () => (
  showMessage(i18n.t('alert.sendFeedbackSuccess'))
);
