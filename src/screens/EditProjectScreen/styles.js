import { StyleSheet } from 'react-native';

import Colors, { Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
  },
  footerContainer: {
    width: '100%',
    padding: 10,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    maxWidth: 300,
    margin: 10,
    borderRadius: 20,
    backgroundColor: Primary(500),
  },
  publishButton: {
    backgroundColor: Colors.publish,
  },
  unpublishButton: {
    backgroundColor: Colors.unpublish,
  },
  submitButtonText: {
    fontSize: 20,
  },
});
