import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 3,
  },
  iconContainer: {
    marginLeft: 8,
    marginRight: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  button: {
    justifyContent: 'flex-start',
    width: 220,
    height: 40,
    borderRadius: 3,
    backgroundColor: Colors.facebook,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
});
