import { StyleSheet, Platform } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
    flex: 1,
  },
  input: {
    padding: Platform.OS === 'ios' ? 10 : 8,
    paddingTop: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 16,
  },
  counterContainer: {
    width: '100%',
    paddingRight: 5,
    paddingBottom: 5,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  counterText: {
    fontSize: 12,
    color: TextColor.subDark,
  },
});
