import { StyleSheet, Platform } from 'react-native';

import Colors, {
  Base,
  Tertiary,
} from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Base.lightest,
    width: '100%',
    borderWidth: 1,
    borderColor: Tertiary(100),
    padding: Platform.OS === 'ios' ? 10 : 8,
  },
  value: {
    fontSize: 16,
  },
  placeholder: {
    color: Colors.placeholder,
  },
});
