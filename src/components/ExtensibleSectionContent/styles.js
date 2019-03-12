import { StyleSheet } from 'react-native';

import { Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
  },
  contentContainer: {
  },
  moreButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    backgroundColor: Tertiary(100),
    padding: 5,
  },
  moreButtonText: {
    fontSize: 16,
    color: '#666666',
  },
});
