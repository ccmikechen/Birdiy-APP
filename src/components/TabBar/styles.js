import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    elevation: 8,
    height: Size.bottomTabBarHeight,
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
});
