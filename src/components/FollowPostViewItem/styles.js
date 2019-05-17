import { StyleSheet } from 'react-native';

import { TextColor } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    margin: 10,
    marginTop: 0,
    width: Size.followPostImageSize,
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    height: Size.followPostAuthorInfoHeight,
  },
  authorAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  authorNameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
  },
  authorName: {
    fontSize: 16,
    color: TextColor.secondaryDark,
  },
});
