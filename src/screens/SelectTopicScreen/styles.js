import { StyleSheet } from 'react-native';

import { Base, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
  },
  sectionHeaderContainer: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: '600',
    color: Primary(700),
  },
});
