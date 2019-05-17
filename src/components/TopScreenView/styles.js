import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Size from '../../constants/Size';

export default StyleSheet.create({
  statusBarPaddingView: {
    height: Constants.statusBarHeight,
  },
  paddingView: {
    height: Size.headerHeight,
  },
});
