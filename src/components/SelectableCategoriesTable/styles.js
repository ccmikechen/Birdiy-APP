import { StyleSheet } from 'react-native';

import { Primary, Tertiary, TextColor } from '../../constants/Colors';

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
    borderRadius: 10,
    backgroundColor: Tertiary(900),
  },
  image: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  selection: {
    borderWidth: 3,
    borderColor: Primary(300),
  },
  name: {
    color: TextColor.primaryLight,
    fontWeight: '600',
    fontSize: 20,
  },
});
