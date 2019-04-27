import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
  },
  titleContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: TextColor.sectionTitle,
  },
  contentContainer: {
  },
  seperateLine: {
    height: 1,
    width: '90%',
    backgroundColor: Base.dark,
    alignSelf: 'center',
  },
});
