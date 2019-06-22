import { StyleSheet } from 'react-native';

import { Primary, TextColor } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  adContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4c542',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  adText: {
    fontSize: 12,
    color: TextColor.primaryLight,
  },
  media: {
    height: 200,
  },
  headlineContainer: {
    marginTop: 10,
  },
  headline: {
    fontSize: 16,
    color: TextColor.secondaryDark,
  },
  bodyTextContainer: {
    marginTop: 10,
  },
  bodyText: {
    fontSize: 14,
    color: TextColor.subDark,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  advertiserContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  advertiserNameContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 10,
  },
  advertiserName: {
    fontSize: 15,
    color: TextColor.secondaryDark,
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
