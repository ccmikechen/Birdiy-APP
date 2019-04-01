import { StyleSheet } from 'react-native';

import Colors, { Base, Primary, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.light,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  projectImageContainer: {
  },
  projectImage: {
    width: '100%',
    aspectRatio: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Tertiary(100),
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
