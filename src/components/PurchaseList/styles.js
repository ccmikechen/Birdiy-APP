import { StyleSheet, Dimensions } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - Size.headerHeight - Size.bottomTabBarHeight - 60,
  },
});
