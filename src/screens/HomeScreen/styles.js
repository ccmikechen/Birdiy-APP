import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  categoriesContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  paddingView: {
    height: Size.homeSectionPadding,
    backgroundColor: Colors.homeSectionDark,
  },
  sectionAd: {
    width: '100%',
    height: 400,
    padding: 10,
    backgroundColor: Colors.homeSectionDark,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
