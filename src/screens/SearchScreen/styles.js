import { StyleSheet } from 'react-native';

import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.dark,
  },
  projectColumn: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  projectSectionContainer: {
    flex: 1,
    margin: 5,
  },
});
