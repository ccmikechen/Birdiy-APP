import { StyleSheet } from 'react-native';

import Colors, { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: Base.dark,
  },
  infoContainer: {
    backgroundColor: Base.lightest,
    minHeight: 40,
    flexGrow: 1,
  },
  infoTopContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    color: Tertiary(900),
    fontWeight: '600',
    fontSize: 16,
    padding: 5,
  },
  statusContainer: {
    paddingTop: 5,
    paddingRight: 5,
  },
  status: {
    fontSize: 12,
  },
  draftStatus: {
    color: Colors.draftStatus,
  },
  publishedStatus: {
    color: Colors.publishedStatus,
  },
  infoBottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  authorContainer: {
    flex: 1,
  },
  author: {
    color: Tertiary(500),
    fontSize: 12,
    padding: 5,
  },
  optionContainer: {
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
});
