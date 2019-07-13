import { StyleSheet, Dimensions } from 'react-native';

import Colors, { Base, TextColor, Primary } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
  },
  projectImageContainer: {
  },
  projectVideo: {
    width: '100%',
    aspectRatio: 16 / 9,
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
  topic: {
    fontSize: 12,
    color: TextColor.subDark,
  },
  titleContainer: {
    paddingTop: 5,
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
  sourceContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
  },
  sourceTitle: {
    fontSize: 16,
    color: TextColor.primaryDark,
    paddingRight: 10,
  },
  source: {
    fontSize: 16,
    color: Primary(700),
  },
  adContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Base.lighter,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  tipContainer: {
    padding: 40,
    paddingBottom: 20,
    paddingTop: 0,
  },
  tip: {
    fontSize: 16,
    color: TextColor.secondaryDark,
    lineHeight: 24,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - Size.bottomTabBarHeight - 60,
  },
});
