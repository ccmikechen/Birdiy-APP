import { StyleSheet } from 'react-native';

import { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: TextColor.sectionTitle,
  },
});
