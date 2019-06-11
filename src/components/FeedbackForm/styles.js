import { StyleSheet } from 'react-native';

import { Base, TextColor, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginTop: 10,
  },
  selectionContainer: {
    height: 120,
  },
  selectionButtonContainer: {
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
  },
  selectionButtonText: {
    fontSize: 16,
    fontWeight: '100',
    color: TextColor.secondaryDark,
  },
  inputContainer: {
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Base.darker,
    height: '100%',
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    color: TextColor.secondaryDark,
  },
  submitButtonContainer: {
    marginTop: 20,
    height: 50,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Primary(700),
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize: 16,
    color: TextColor.primaryLight,
  },
});
