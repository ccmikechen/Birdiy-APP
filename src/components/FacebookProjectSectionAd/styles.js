import { StyleSheet } from 'react-native';

import { Base, TextColor, Primary } from '../../constants/Colors';
import Size from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaContainer: {
    aspectRatio: 1,
    backgroundColor: Base.dark,
    borderTopLeftRadius: Size.projectSectionBorderRadius,
    borderTopRightRadius: Size.projectSectionBorderRadius,
  },
  media: {
    flex: 1,
    borderTopLeftRadius: Size.projectSectionBorderRadius,
    borderTopRightRadius: Size.projectSectionBorderRadius,
  },
  infoContainer: {
    backgroundColor: Base.lightest,
    minHeight: 40,
    flexGrow: 1,
    borderBottomLeftRadius: Size.projectSectionBorderRadius,
    borderBottomRightRadius: Size.projectSectionBorderRadius,
    paddingBottom: 5,
  },
  infoTopContainer: {
    padding: 5,
    paddingBottom: 3,
    flexDirection: 'row',
  },
  adTextContainer: {
    flex: 1,
    paddingRight: 3,
  },
  adText: {
    fontSize: 10,
    color: TextColor.subDark,
  },
  advertiserContainer: {
    flex: 1,
  },
  advertiserNameContainer: {
    flex: 1,
  },
  advertiserName: {
    color: TextColor.primaryDark,
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
    width: 40,
    height: 40,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  headlineContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  headline: {
    fontSize: 12,
    color: TextColor.secondaryDark,
  },
  installTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  installText: {
    fontSize: 14,
    color: Primary(700),
  },
});
