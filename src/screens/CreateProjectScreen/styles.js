import { StyleSheet } from 'react-native';

import { Base, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  submitButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 300,
    borderRadius: 20,
    backgroundColor: Primary(500),
  },
  submitButtonText: {
    fontSize: 20,
  },
});
