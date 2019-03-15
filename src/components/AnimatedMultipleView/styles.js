import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  view: {
    width: Dimensions.get('window').width,
  },
});
