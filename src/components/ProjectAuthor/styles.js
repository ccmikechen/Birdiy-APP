import { StyleSheet } from 'react-native';

import { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  userImageContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  userNameContainer: {
    justifyContent: 'center',
  },
  userName: {
    color: TextColor.secondaryDark,
    fontSize: 16,
    fontWeight: '600',
  },
  statisticsContainer: {
  },
  statistics: {
    fontSize: 12,
    color: TextColor.subDark,
  },
});
