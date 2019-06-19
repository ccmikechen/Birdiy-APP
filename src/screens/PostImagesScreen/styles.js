import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.coverModalBackground,
  },
  headerContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  closeButton: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
