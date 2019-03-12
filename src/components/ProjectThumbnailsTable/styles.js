import { StyleSheet } from 'react-native';

import { Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
  },
  image: {
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Tertiary(900),
  },
  titleContainer: {
    backgroundColor: '#eeeeee',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    minHeight: 40,
  },
  title: {
    color: Tertiary(900),
    fontWeight: '600',
    fontSize: 16,
    padding: 5,
  },
});
