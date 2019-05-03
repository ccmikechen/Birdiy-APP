import { StyleSheet } from 'react-native';

import Size from '../../constants/Size';
import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingView: {
    height: Size.headerHeight,
    zIndex: 0,
  },
  postContainer: {
    flex: 1,
    backgroundColor: Base.lightest,
    margin: 10,
  },
});
