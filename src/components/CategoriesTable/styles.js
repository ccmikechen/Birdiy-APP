import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

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
    backgroundColor: Base.lightest,
  },
  image: {
    borderRadius: 20,
  },
  name: {
    textAlign: 'center',
    color: TextColor.primaryLight,
    fontWeight: '600',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 10,
  },
});
