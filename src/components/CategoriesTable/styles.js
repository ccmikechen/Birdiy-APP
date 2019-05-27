import { StyleSheet } from 'react-native';

import { Base, Secondary } from '../../constants/Colors';

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
    borderWidth: 1,
    borderColor: Secondary(900),
    backgroundColor: Base.lightest,
  },
  image: {
    borderRadius: 20,
  },
  name: {
    textAlign: 'center',
    color: Secondary(900),
    fontWeight: '600',
    fontSize: 16,
  },
});
