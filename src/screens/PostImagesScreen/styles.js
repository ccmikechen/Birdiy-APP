import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.coverModalBackground,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
