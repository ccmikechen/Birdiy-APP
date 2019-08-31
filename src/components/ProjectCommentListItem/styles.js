import { StyleSheet } from 'react-native';

import Colors, { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
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
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 40,
  },
  replyButtonContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  replyButton: {
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: TextColor.disabled,
  },
  commentInput: {
    marginLeft: 40,
    marginBottom: 15,
  },
});
