import { StyleSheet } from 'react-native';

import { Base, TextColor, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
  },
  titleContainer: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: Tertiary(200),
  },
  title: {
    fontSize: 22,
    color: TextColor.primaryLight,
    fontWeight: '600',
  },
  contentContainer: {
  },
});
