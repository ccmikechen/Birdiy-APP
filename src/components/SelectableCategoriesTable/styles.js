import { StyleSheet } from 'react-native';

import { Tertiary, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: Tertiary(300),
  },
  image: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  selection: {
    backgroundColor: Tertiary(800),
  },
  name: {
    textAlign: 'center',
    color: TextColor.primaryLight,
    fontWeight: '600',
    fontSize: 16,
  },
});
