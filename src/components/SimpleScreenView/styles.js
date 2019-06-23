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
  adContainer: {
    position: 'absolute',
    bottom: Size.bottomTabBarHeight,
    width: '100%',
    height: 50,
    zIndex: 100,
  },
  admobContainer: {
    alignItems: 'center',
  },
});
