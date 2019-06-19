import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
  },
  headerContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  loginButtonContainer: {
    margin: 10,
  },
  closeButton: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
