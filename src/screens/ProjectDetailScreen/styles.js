import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
  },
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
  authorContainer: {
    paddingBottom: 10,
    backgroundColor: Base.lightest,
  },
  optionsContainer: {
  },
  introContainer: {
    padding: 20,
    paddingTop: 0,
  },
  intro: {
    fontSize: 16,
    color: TextColor.secondaryDark,
    lineHeight: 24,
  },
  tipContainer: {
    padding: 20,
    paddingTop: 0,
  },
  tip: {
    fontSize: 16,
    color: TextColor.secondaryDark,
    lineHeight: 24,
  },
});
