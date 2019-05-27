import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  searchBar: {
    height: Size.searchBarHeight,
  },
  category: {
    color: Primary(700),
    fontWeight: '600',
    fontSize: 18,
  },
  categorySub: {
    color: Primary(700),
    fontWeight: '600',
    fontSize: 12,
  },
  topic: {
    color: Primary(900),
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 5,
  },
});
