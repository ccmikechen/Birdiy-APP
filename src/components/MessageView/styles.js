import { StyleSheet } from 'react-native';

import Colors, { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Base.lightest,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.defaultMessage,
  },
});
