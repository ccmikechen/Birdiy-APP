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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
    padding: Platform.OS === 'ios' ? 10 : 8,
  },
  error: {
    borderColor: Colors.danger,
  },
  value: {
    fontSize: 16,
  },
  errorValue: {
    color: Colors.danger,
  },
  placeholder: {
    color: Colors.placeholder,
  },
});
