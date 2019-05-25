import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    backgroundColor: Primary(700),
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
});
