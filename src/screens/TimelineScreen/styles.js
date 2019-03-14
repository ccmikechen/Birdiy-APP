import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  addPostButton: {
    right: 20,
    bottom: Size.bottomTabBarHeight + 20,
  },
});
