import { Alert } from 'react-native';

export const showAlert = (message, title = '', options) => (
  Alert.alert(title, message, options)
);

export const showLoginAlert = () => (
  showAlert('請先登入')
);

export const showLoginFailedAlert = () => (
  showAlert('登入失敗')
);

export const showSaveProjectSuccessAlert = () => (
  showAlert('專案儲存成功')
);

export const showSaveProjectFailedAlert = () => (
  showAlert('專案儲存失敗')
);

export const showPublishProjectSuccessAlert = () => (
  showAlert('專案已設為公開')
);

export const showUnpublishProjectSuccessAlert = () => (
  showAlert('專案已設為不公開')
);

export const showSetProjectFaieldAlert = () => (
  showAlert('專案設定失敗')
);

export const showDeleteProjectAlert = () => new Promise(resolve => (
  showAlert(
    '專案一旦刪除則無法手動復原，確定要刪除專案嗎？',
    '刪除專案',
    [
      { text: '取消' },
      { text: '確定', onPress: () => resolve() },
    ],
  )
));

export const showDeleteProjectSuccessAlert = () => (
  showAlert(
    '專案已成功刪除，若要復原請聯繫客服人員。',
    '專案刪除成功',
  )
);

export const showDeleteProjectFailedAlert = () => (
  showAlert('專案刪除失敗')
);

export const showCreatePostSuccessAlert = () => (
  showAlert('投稿發佈成功')
);

export const showCreatePostFailedAlert = () => (
  showAlert('投稿發佈失敗')
);

export const showEditPostSuccessAlert = () => (
  showAlert('投稿編輯成功')
);

export const showEditPostFailedAlert = () => (
  showAlert('投稿編輯失敗')
);

export const showDeletePostSuccessAlert = () => (
  showAlert(
    '投稿已成功刪除，若要復原請聯繫客服人員。',
    '投稿刪除成功',
  )
);

export const showDeletePostFailedAlert = () => (
  showAlert('投稿刪除失敗')
);

export const showEditProfileFailedAlert = () => (
  showAlert('編輯個人檔案失敗')
);
