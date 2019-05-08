import { StyleSheet } from 'react-native';

import { TextColor, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
    padding: 10,
  },
  nameContainer: {
    flex: 1.5,
    justifyContent: 'center',
    paddingRight: 5,
  },
  name: {
    fontSize: 16,
    color: TextColor.primaryDark,
  },
  amountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  amount: {
    fontSize: 16,
    color: TextColor.subDark,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  buttonContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButton: {
    paddingRight: 5,
  },
});
