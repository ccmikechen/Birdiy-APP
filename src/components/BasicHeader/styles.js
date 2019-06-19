import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Colors, { Base } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: Size.headerHeight,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Base.lightest,
    elevation: 1,
    zIndex: 100,
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
    marginRight: 10,
  },
  centerText: {
    color: Colors.headerIcon,
  },
  rightButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 5,
  },
  rightButton: {
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 14,
    marginLeft: 10,
  },
});
