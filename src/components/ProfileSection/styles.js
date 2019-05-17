import { StyleSheet } from 'react-native';

import { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
  },
  avatarContainer: {
    marginLeft: 10,
  },
  profileContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
  },
  nameContainer: {
    flex: 1,
    marginTop: -5,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 24,
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
