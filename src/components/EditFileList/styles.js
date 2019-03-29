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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    backgroundColor: Primary(500),
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
