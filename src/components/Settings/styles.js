import { StyleSheet } from 'react-native';

import Colors, { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  icon: {
    marginLeft: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: TextColor.secondaryDark,
  },
  logoutTitle: {
    color: Colors.logoutButton,
  },
});
