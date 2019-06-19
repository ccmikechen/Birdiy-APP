import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Size from '../../constants/Size';
import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
  },
  statusBarPaddingView: {
    height: Constants.statusBarHeight,
  },
  paddingView: {
    height: Size.headerHeight,
  },
  bottomTabBarPaddingView: {
    height: Size.bottomTabBarHeight,
  },
});
