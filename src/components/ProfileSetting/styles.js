import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Tertiary(100),
  },
  avatarContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
});
