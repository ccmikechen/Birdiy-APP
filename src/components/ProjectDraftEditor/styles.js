import { StyleSheet } from 'react-native';

import { Base, Primary, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
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
    width: '90%',
    maxWidth: 300,
    borderRadius: 20,
    backgroundColor: Primary(700),
  },
  submitButtonText: {
    fontSize: 20,
  },
  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
});
