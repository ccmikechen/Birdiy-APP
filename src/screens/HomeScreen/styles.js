import { StyleSheet } from 'react-native';

import Colors, { Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  categoriesContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    backgroundColor: Colors.homeSectionDark,
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
  sectionAd: {
    width: '100%',
    height: 400,
    padding: 10,
    backgroundColor: Colors.homeSectionDark,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
});
