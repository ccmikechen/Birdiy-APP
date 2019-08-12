import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
  },
  bottomPaddingView: {
    height: Size.homeSectionPadding,
    backgroundColor: Colors.homeSectionDark,
  },
});
