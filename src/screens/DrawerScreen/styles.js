import { StyleSheet } from 'react-native';

const MAIN_TEXT_COLOR = '#ffffff';
const SUB_TEXT_COLOR = '#aaaaaa';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    height: 200,
    backgroundColor: '#555',
    padding: 10,
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
    color: MAIN_TEXT_COLOR,
  },
  profileHintContainer: {
  },
  profileHint: {
    fontSize: 12,
    color: SUB_TEXT_COLOR,
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
    color: MAIN_TEXT_COLOR,
  },
  following: {
    fontSize: 16,
    color: SUB_TEXT_COLOR,
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
