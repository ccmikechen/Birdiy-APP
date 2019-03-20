import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Base, TextColor } from '../../constants/Colors';

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
    width: Size.myProjectListImageSize,
    aspectRatio: 1,
  },
  image: {
    width: Size.myProjectListImageSize,
    height: Size.myProjectListImageSize,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: TextColor.primaryDark,
  },
  dateContainer: {
    height: 20,
  },
  date: {
    fontSize: 12,
    color: TextColor.subDark,
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
