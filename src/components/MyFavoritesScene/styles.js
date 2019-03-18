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
  titleContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: TextColor.primaryDark,
  },
  moreButtonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
