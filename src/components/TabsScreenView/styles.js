import { StyleSheet } from 'react-native';

import { Base } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  tabBarPaddingView: {
    height: Size.topTabBarHeight,
  },
  bottomTabBarPaddingView: {
    height: Size.bottomTabBarHeight,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 10,
  },
  contentContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
});
