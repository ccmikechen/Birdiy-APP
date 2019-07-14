import { StyleSheet } from 'react-native';

import Colors, { TextColor } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  category: {
    fontSize: 16,
    color: TextColor.sectionTitle,
  },
  itemContainer: {
    justifyContent: 'flex-start',
  },
  bottomPaddingView: {
    height: Size.homeSectionPadding,
    backgroundColor: Colors.homeSectionDark,
  },
});
