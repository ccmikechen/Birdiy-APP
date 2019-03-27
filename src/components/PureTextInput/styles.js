import { StyleSheet, Platform } from 'react-native';

import { Base, TextColor, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
    width: '100%',
    borderWidth: 1,
    borderColor: Tertiary(100),
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
