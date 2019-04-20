import { StyleSheet } from 'react-native';

import { TextColor } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    margin: 10,
    marginTop: 0,
  },
  image: {
    aspectRatio: 1,
  },
  authorContainer: {
    flexDirection: 'row',
    height: Size.followPostAuthorInfoHeight,
  },
  authorImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  authorImage: {
    height: Size.followPostAuthorImageSize,
    aspectRatio: 1,
    borderRadius: Size.followPostAuthorImageSize / 2,
  },
  authorNameContainer: {
    justifyContent: 'center',
  },
  authorName: {
    fontSize: 16,
    color: TextColor.secondaryDark,
  },
});
