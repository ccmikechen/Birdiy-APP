import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    margin: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Primary(700),
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
});
