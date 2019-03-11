import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    color: Base.primaryText,
    fontSize: 18,
  },
  leftButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  leftButton: {
  },
  centerComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  rightButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  rightButton: {
  },
});
