import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: Base.dark,
  },
  titleContainer: {
    backgroundColor: Base.lightest,
    minHeight: 40,
  },
  title: {
    color: Tertiary(900),
    fontWeight: '600',
    fontSize: 16,
    padding: 5,
  },
  author: {
    color: Tertiary(500),
    fontSize: 12,
    padding: 5,
  },
});
