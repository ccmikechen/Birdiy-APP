import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import Colors, { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    height: Size.userProjectListImageSize,
    backgroundColor: Base.lightest,
    margin: 10,
    marginTop: 0,
    elevation: 2,
    borderRadius: Size.horCardBorderRadius,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.userProjectListImageSize,
    aspectRatio: 1,
    backgroundColor: Base.dark,
    borderTopLeftRadius: Size.horCardBorderRadius,
    borderBottomLeftRadius: Size.horCardBorderRadius,
  },
  image: {
    width: Size.userProjectListImageSize,
    height: Size.userProjectListImageSize,
    borderTopLeftRadius: Size.horCardBorderRadius,
    borderBottomLeftRadius: Size.horCardBorderRadius,
  },
  contentContainer: {
    flex: 1,
  },
  topContentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: TextColor.primaryDark,
  },
  optionContainer: {
    paddingTop: 5,
    paddingRight: 5,
  },
  bottomContentContainer: {
    justifyContent: 'center',
  },
  statusContainer: {
    paddingLeft: 10,
    paddingBottom: 5,
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
  authorContainer: {
    paddingLeft: 10,
    paddingBottom: 5,
    height: 20,
    justifyContent: 'center',
  },
  author: {
    fontSize: 12,
    color: TextColor.subDark,
  },
});
