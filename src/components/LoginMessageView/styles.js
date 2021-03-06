import { StyleSheet } from 'react-native';

import Colors, { Base, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Base.lightest,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.defaultMessage,
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    width: 150,
    backgroundColor: Primary(700),
  },
});
