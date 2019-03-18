import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
  },
  image: {
    aspectRatio: 1,
    backgroundColor: Tertiary(900),
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
