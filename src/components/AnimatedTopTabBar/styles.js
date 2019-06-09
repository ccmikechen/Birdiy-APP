import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    top: 32,
    zIndex: 10,
    height: Size.topTabBarHeight,
    backgroundColor: Base.lightest,
    borderBottomWidth: 1,
    borderBottomColor: Base.dark,
  },
});
