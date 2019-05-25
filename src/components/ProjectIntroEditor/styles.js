import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
  contentContainer: {
    paddingTop: Size.headerHeight,
    paddingBottom: 100,
  },
});
