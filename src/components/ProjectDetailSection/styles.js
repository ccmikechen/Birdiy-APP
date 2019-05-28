import { StyleSheet } from 'react-native';

import { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
    paddingTop: 20,
    paddingBottom: 10,
  },
  titleContainer: {
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: TextColor.sectionTitle,
  },
});
