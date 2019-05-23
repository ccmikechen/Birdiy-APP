import { StyleSheet } from 'react-native';

import Colors, { Base, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Base.lightest,
    margin: 5,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
  },
  nameContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: Tertiary(100),
  },
  amountContainer: {
    flex: 1,
  },
  urlContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'transparent',
  },
  iconContainer: {
    justifyContent: 'center',
    width: 30,
    marginLeft: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    height: 30,
    width: '100%',
  },
  moveContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Tertiary(200),
  },
  moveButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: Tertiary(100),
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    backgroundColor: Colors.closeButton,
  },
});
