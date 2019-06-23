import { StyleSheet } from 'react-native';

import { Primary, TextColor } from '../../constants/Colors';

import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsContainer: {
    height: 10,
    alignItems: 'flex-end',
  },
  profileContainer: {
    flexDirection: 'row',
    height: 60,
    padding: 5,
  },
  icon: {
    width: Size.postProfileImageSize,
    height: Size.postProfileImageSize,
  },
  advertiserNameContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  advertiserName: {
    color: TextColor.primaryDark,
    fontSize: 16,
  },
  bodyTextContainer: {
    padding: 10,
  },
  bodyText: {
    color: TextColor.secondaryDark,
    fontSize: 14,
  },
  media: {
    height: 300,
  },
  footerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 50,
    padding: 10,
  },
  headlineContainer: {
    flex: 1,
  },
  headline: {
    color: TextColor.secondaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
  installTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  installText: {
    fontSize: 14,
    color: Primary(700),
  },
});
