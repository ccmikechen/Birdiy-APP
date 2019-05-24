import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.settingBorder,
    height: Size.settingItemHeight,
  },
  textContainer: {
    paddingLeft: 15,
  },
  text: {
    fontSize: 18,
  },
  selectedIconContainer: {
    padding: 15,
  },
});
