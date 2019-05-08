import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
    paddingTop: 10,
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
});
