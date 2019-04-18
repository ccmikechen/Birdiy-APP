import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  view: {
    width: Dimensions.get('window').width,
  },
});
