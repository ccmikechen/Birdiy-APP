import { StyleSheet } from 'react-native';

import { TextColor, Secondary, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    elevation: 4,
  },
  profileContainer: {
    flexDirection: 'row',
    height: 60,
    padding: 5,
    paddingTop: 10,
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
  actionsContainer: {
    marginRight: 5,
  },
  actionButtonContainer: {
    alignItems: 'flex-end',
  },
  messageContainer: {
    padding: 10,
  },
  message: {
    color: TextColor.primaryDark,
    fontSize: 14,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
  },
  sourceContainer: {
    minHeight: 50,
    padding: 10,
    justifyContent: 'center',
  },
  source: {
    color: Secondary(900),
    fontSize: 18,
    fontWeight: '600',
  },
  customSource: {
    color: Tertiary(900),
  },
});
