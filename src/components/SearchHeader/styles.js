import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  searchBar: {
    height: Size.searchBarHeight,
  },
  title: {
    color: Colors.headerIcon,
    fontWeight: '600',
    fontSize: 18,
  },
});
