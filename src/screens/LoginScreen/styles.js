import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Color, { TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.appIcon,
  },
  headerContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  brandContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: 60,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginButtonContainer: {
    margin: 10,
  },
  closeButton: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  agreement: {
    color: TextColor.primaryLight,
    fontSize: 14,
  },
  terms: {
    color: TextColor.primaryLight,
    textDecorationLine: 'underline',
  },
});
