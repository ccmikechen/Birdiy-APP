import { StyleSheet } from 'react-native';

import Colors, { Base, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Base.lightest,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    color: TextColor.sectionTitle,
  },
  error: {
    fontSize: 14,
    color: Colors.danger,
  },
  contentContainer: {
  },
});
