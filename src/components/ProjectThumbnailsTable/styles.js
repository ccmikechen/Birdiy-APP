import { StyleSheet } from 'react-native';

import { Secondary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  category: {
    fontSize: 16,
    color: Secondary(900),
    fontWeight: '600',
  },
  itemContainer: {
    justifyContent: 'flex-start',
  },
});
