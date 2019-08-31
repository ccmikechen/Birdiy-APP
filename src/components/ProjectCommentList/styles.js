import { StyleSheet } from 'react-native';

import { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    padding: 15,
  },
  commentInput: {
    marginBottom: 30,
  },
  moreButton: {
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 16,
    color: Primary(700),
  },
});
