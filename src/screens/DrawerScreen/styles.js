import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
  },
  headerContainer: {
    height: 200,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
  },
  profileContainer: {
    flex: 0.4,
    flexDirection: 'row',
  },
  profileImageContainer: {
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileInfoContainer: {
    paddingLeft: 10,
  },
  profileNameContainer: {
  },
  profileName: {
    fontSize: 20,
    color: TextColor.primaryLight,
  },
  profileHintContainer: {
  },
  profileHint: {
    fontSize: 12,
    color: TextColor.subLight,
  },
  profileLevelContainer: {
  },
  profileLevelImage: {
  },
  relationInfoContainer: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 20,
  },
  followingContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  followingNumber: {
    fontSize: 16,
    color: TextColor.primaryLight,
  },
  following: {
    fontSize: 16,
    color: TextColor.subLight,
    marginLeft: 10,
  },
  postButtonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  menuContainer: {
  },
  menu: {
    marginTop: 20,
  },
});
