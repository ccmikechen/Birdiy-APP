import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingView: {
    height: Size.headerHeight,
    zIndex: 0,
  },
  projectSectionContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  projectContainer: {
    flex: 1,
    margin: 5,
    elevation: 1,
  },
});
