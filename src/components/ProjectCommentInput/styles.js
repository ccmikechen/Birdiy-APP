import { StyleSheet } from 'react-native';

import Colors, { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  avatarContainer: {
    width: 40,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.settingBorder,
  },
  inputContainerFocus: {
    borderBottomColor: Primary(700),
  },
  input: {
    width: '100%',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
