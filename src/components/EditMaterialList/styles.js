import { StyleSheet } from 'react-native';

import { Base, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  listContainer: {
    width: '100%',
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: Primary(500),
    padding: 5,
  },
  addButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
