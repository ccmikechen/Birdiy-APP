import { Alert } from 'react-native';
import i18n from 'i18n-js';

export const showAlert = (message, title = '', options) => (
  setTimeout(() => Alert.alert(title, message, options), 100)
);

export const showPublishProjectLimitAlert = (hours, times) => (
  showAlert(
    i18n.t('alert.publishProjectLimit.message', { hours, times }),
    i18n.t('alert.publishProjectLimit.title'),
  )
);

export const showDeleteProjectAlert = () => new Promise(resolve => (
  showAlert(
    i18n.t('alert.deleteProject.message'),
    i18n.t('alert.deleteProject.title'),
    [
      { text: i18n.t('general.cancel') },
      { text: i18n.t('general.ok'), onPress: () => resolve() },
    ],
  )
));

export const showDeleteProjectSuccessAlert = () => (
  showAlert(i18n.t('alert.deleteProjectSuccess'))
);

export const showGoBackAlert = () => new Promise(resolve => (
  showAlert(
    i18n.t('alert.goBack'),
    i18n.t('general.goBack'),
    [
      { text: i18n.t('general.cancel') },
      { text: i18n.t('general.ok'), onPress: () => resolve() },
    ],
  )
));

export const showCreatePostLimitAlert = (hours, times) => (
  showAlert(
    i18n.t('alert.createPostLimit.message', { hours, times }),
    i18n.t('alert.createPostLimit.title'),
  )
);

export const showDeletePostSuccessAlert = () => (
  showAlert(i18n.t('alert.deletePostSuccess'))
);

export const showUnsavedGoBackAlert = () => new Promise(resolve => (
  showAlert(
    i18n.t('alert.unsavedGoBack'),
    i18n.t('general.goBack'),
    [
      { text: i18n.t('general.cancel') },
      { text: i18n.t('general.ok'), onPress: () => resolve() },
    ],
  )
));

export const showDeleteCartProjectAlert = name => new Promise(resolve => (
  showAlert(
    i18n.t('alert.deleteCartProject.message', { name }),
    i18n.t('alert.deleteCartProject.title'),
    [
      { text: i18n.t('general.cancel') },
      { text: i18n.t('general.ok'), onPress: () => resolve() },
    ],
  )
));

export const showSaveProjectErrorAlert = (errors) => {
  const fields = Object.keys(errors).map(field => (
    i18n.t(`project.edit.${field}.title`)
  )).join('\n');
  showAlert(i18n.t('alert.saveProjectError', { fields }));
};
