import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Base } from '../../constants/Colors';

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
    color: Base.primaryText,
  },
  profileHintContainer: {
  },
  profileHint: {
    fontSize: 12,
    color: Base.subText,
  },
  profileLevelContainer: {
  },
  profileLevelImage: {
  },
  relationInfoContainer: {
    flex: 0.3,
  },
  followingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  followingNumber: {
    fontSize: 16,
    color: Base.primaryText,
  },
  following: {
    fontSize: 16,
    color: Base.subText,
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
