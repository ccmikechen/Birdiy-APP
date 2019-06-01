import { StyleSheet } from 'react-native';

import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  defaultImage: {
    backgroundColor: Base.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  imagesInfoContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagesAmountContainer: {
    marginLeft: 5,
  },
  imagesAmount: {
    color: Base.lightest,
    fontSize: 24,
  },
  loadingContainer: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
