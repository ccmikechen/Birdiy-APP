import { StyleSheet } from 'react-native';

import { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Base.darker,
    position: 'relative',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#999999',
    borderRadius: 100,
    padding: 5,
    elevation: 2,
  },
});
