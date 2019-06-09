import { StyleSheet, Dimensions } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  tabBarPaddingView: {
    height: Size.topTabBarHeight,
  },
  contentContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
  page: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
