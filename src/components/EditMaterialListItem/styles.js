import { StyleSheet } from 'react-native';

import { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
    margin: 5,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
  nameContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: Tertiary(100),
  },
  amountContainer: {
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    width: 30,
    marginLeft: 8,
  },
});
