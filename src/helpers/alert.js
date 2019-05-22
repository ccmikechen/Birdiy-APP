import { Alert } from 'react-native';
import i18n from 'i18n-js';

export const showAlert = (message, title = '', options) => (
  setTimeout(() => Alert.alert(title, message, options), 100)
);

export const showLoginAlert = () => (
  showAlert(i18n.t('alert.login'))
);

export const showLoginFailedAlert = () => (
  showAlert(i18n.t('alert.loginFailed'))
);

export const showSaveProjectSuccessAlert = () => (
  showAlert(i18n.t('alert.saveProjectSuccess'))
);

export const showSaveProjectFailedAlert = () => (
  showAlert(i18n.t('alert.saveProjectFailed'))
);

export const showPublishProjectSuccessAlert = () => (
  showAlert(i18n.t('alert.publishProjectSuccess'))
);

export const showUnpublishProjectSuccessAlert = () => (
  showAlert(i18n.t('alert.unpublishProjectSuccess'))
);

export const showSetProjectFailedAlert = () => (
  showAlert(i18n.t('alert.setProjectFailed'))
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
  showAlert(
    i18n.t('alert.deleteProjectSuccess.message'),
    i18n.t('alert.deleteProjectSuccess.title'),
  )
);

export const showDeleteProjectFailedAlert = () => (
  showAlert(i18n.t('alert.deleteProjectFailed'))
);

export const showCreatePostSuccessAlert = () => (
  showAlert(i18n.t('alert.createPostSuccess'))
);

export const showCreatePostFailedAlert = () => (
  showAlert(i18n.t('alert.createPostFailed'))
);

export const showEditPostSuccessAlert = () => (
  showAlert(i18n.t('alert.editPostSuccess'))
);

export const showEditPostFailedAlert = () => (
  showAlert(i18n.t('alert.editPostFailed'))
);

export const showDeletePostSuccessAlert = () => (
  showAlert(
    i18n.t('alert.deletePostSuccess.message'),
    i18n.t('alert.deletePostSUccess.title'),
  )
);

export const showDeletePostFailedAlert = () => (
  showAlert(i18n.t('alert.deletePostFailed'))
);

export const showEditProfileFailedAlert = () => (
  showAlert(i18n.t('alert.editProfileFailed'))
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
