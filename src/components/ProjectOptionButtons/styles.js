import { StyleSheet } from 'react-native';

import Colors, { Base } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: Base.lighter,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: Colors.headerIcon,
  },
  divider: {
    width: 1,
    backgroundColor: Colors.divider,
    height: '90%',
    alignSelf: 'center',
  },
});
