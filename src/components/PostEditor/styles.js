import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.light,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  projectSelectorContainer: {
  },
  textInput: {
    borderWidth: 1,
    borderColor: Tertiary(100),
  },
});
