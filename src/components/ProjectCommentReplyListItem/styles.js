import { StyleSheet } from 'react-native';

import Colors, { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
  },
  headerContainer: {
    flexDirection: 'row',
  },
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  avatarContainer: {
    width: 40,
  },
  userNameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
  },
  userName: {
    fontSize: 14,
    color: TextColor.primaryDark,
  },
  optionButton: {
    justifyContent: 'center',
  },
  messageContainer: {
    marginLeft: 40,
    marginTop: 10,
  },
  message: {
    fontSize: 14,
    color: Colors.commentMessage,
  },
  footerContainer: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: TextColor.disabled,
  },
});
