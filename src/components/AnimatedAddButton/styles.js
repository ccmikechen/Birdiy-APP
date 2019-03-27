import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Primary(600),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
