import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: Size.profileImageSize + 20,
    paddingTop: 5,
  },
  avatarContainer: {
    marginLeft: 10,
  },
  profileContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  nameContainer: {
    flex: 1,
    marginTop: -5,
  },
  name: {
    fontWeight: '600',
    fontSize: 34,
    color: TextColor.secondaryDark,
  },
  followStatusContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  followingContainer: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  followingNumber: {
    fontSize: 16,
    color: TextColor.secondaryDark,
  },
  following: {
    fontSize: 14,
    color: TextColor.secondaryDark,
    marginLeft: 5,
  },
});
