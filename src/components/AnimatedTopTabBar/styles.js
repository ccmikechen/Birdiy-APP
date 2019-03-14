import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Secondary } from '../../constants/Colors';

export default StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    top: Size.headerHeight,
    left: 0,
    right: 0,
    zIndex: 10,
    height: Size.topTabBarHeight,
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: Secondary(100),
    height: 3,
  },
});
