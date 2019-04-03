import { StyleSheet } from 'react-native';

import {
  Base,
  TextColor,
  Tertiary,
} from '../../constants/Colors';

const primaryColor = Tertiary(400);
const subColor = Tertiary(100);

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderColor: primaryColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    backgroundColor: Base.lightest,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: primaryColor,
    borderLeftWidth: 1,
  },
  firstTab: {
    borderLeftWidth: 0,
  },
  selectedTab: {
    backgroundColor: primaryColor,
  },
  tabText: {
    fontSize: 16,
    color: primaryColor,
  },
  selectedTabText: {
    color: TextColor.primaryLight,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: subColor,
  },
});
