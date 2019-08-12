import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  rowContainer: {
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
  optionContainer: {
    paddingTop: 5,
    paddingRight: 5,
  },
});
