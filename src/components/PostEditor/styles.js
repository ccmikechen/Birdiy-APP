import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  relatedProjectContainer: {
  },
  textInput: {
    borderWidth: 1,
    borderColor: Tertiary(100),
  },
});
