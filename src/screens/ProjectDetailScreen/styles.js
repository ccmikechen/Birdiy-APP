import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  projectImageContainer: {
  },
  projectImage: {
    width: '100%',
    aspectRatio: 1,
  },
  contentSection: {
    width: '100%',
    padding: 10,
    paddingBottom: 0,
    backgroundColor: Base.lightest,
  },
  titleContainer: {
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: TextColor.primaryDark,
  },
  statisticsContainer: {
  },
  statistics: {
    fontSize: 12,
    color: TextColor.subDark,
  },
  optionsContainer: {

  },
  authorContainer: {

  },
  introContainer: {
    paddingBottom: 10,
  },
  intro: {
    fontSize: 14,
    color: TextColor.secondaryDark,
  },
});
