import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 3,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  button: {
    justifyContent: 'flex-start',
    width: 220,
    height: 40,
    borderRadius: 3,
    backgroundColor: '#4285f4',
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
