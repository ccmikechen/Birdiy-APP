import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  section: {
    width: '100%',
  },
  projectImageContainer: {

  },
  projectImage: {
    width: '100%',
    aspectRatio: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Tertiary(100),
  },
});
