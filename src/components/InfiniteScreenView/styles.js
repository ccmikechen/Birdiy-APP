import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 10,
  },
  paddingView: {
    height: Size.headerHeight,
  },
});
