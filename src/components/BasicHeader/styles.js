import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Base } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: Size.headerHeight,
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
