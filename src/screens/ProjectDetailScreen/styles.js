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
  headerSection: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
    backgroundColor: Base.lightest,
  },
  headerInfoContainer: {
    flex: 1,
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
  likeButtonContainer: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
  },
  authorContainer: {
  },
  introContainer: {
    padding: 20,
    paddingBottom: 20,
  },
  intro: {
    fontSize: 14,
    color: TextColor.secondaryDark,
  },
  tipContainer: {
    padding: 20,
    paddingTop: 0,
  },
  tip: {
    fontSize: 14,
    color: TextColor.secondaryDark,
  },
});
