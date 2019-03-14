import { StyleSheet } from 'react-native';

import { Base, TextColor, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
  },
  profileContainer: {
    flexDirection: 'row',
    height: 60,
    padding: 5,
    paddingTop: 10,
  },
  userImageContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  userNameContainer: {
    justifyContent: 'center',
  },
  userName: {
    color: TextColor.primaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
  dateContainer: {
    justifyContent: 'center',
  },
  date: {
    color: TextColor.subDark,
    fontSize: 14,
  },
  messageContainer: {
    padding: 10,
  },
  mesasge: {
    color: TextColor.primaryDark,
    fontSize: 16,
  },
  imageContainer: {
  },
  image: {
  },
  sourceContainer: {
    minHeight: 60,
    backgroundColor: Base.light,
    padding: 10,
  },
  source: {
    color: Tertiary(900),
    fontSize: 18,
    fontWeight: '600',
  },
});
