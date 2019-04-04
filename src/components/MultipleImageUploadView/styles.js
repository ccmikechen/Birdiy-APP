import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
  },
  buttonsContainer: {
    margin: 10,
    marginTop: 0,
    flexDirection: 'row',
  },
  button: {
    marginRight: 20,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
  },
  image: {
    aspectRatio: 1,
  },
  deleteButton: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
});
