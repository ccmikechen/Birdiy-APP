import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Primary(700),
    borderRadius: 10,
    borderStyle: 'dashed',
    aspectRatio: 1,
  },
});
