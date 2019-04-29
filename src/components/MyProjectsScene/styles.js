import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import Colors, { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  listView: {
  },
  rowContainer: {
    height: Size.myProjectListImageSize,
    backgroundColor: Base.lightest,
    margin: 10,
    marginTop: 0,
    elevation: 2,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.myProjectListImageSize,
    aspectRatio: 1,
    backgroundColor: Base.dark,
  },
  image: {
    width: Size.myProjectListImageSize,
    height: Size.myProjectListImageSize,
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
  addButtonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  moreButtonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
