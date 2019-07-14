import { StyleSheet } from 'react-native';

import { Base, TextColor, Primary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 2,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    paddingRight: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: TextColor.primaryDark,
  },
  sectionContainer: {
  },
  sectionTitleContainer: {
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: TextColor.sectionTitle,
  },
  listContainer: {
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Base.dark,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItemNameContainer: {
    flex: 1,
  },
  listItemName: {
    fontSize: 14,
    color: TextColor.primaryDark,
  },
  listItemAmountContainer: {
    flex: 1,
  },
  listItemAmount: {
    fontSize: 14,
    color: TextColor.subDark,
  },
  disabledText: {
    color: TextColor.disabled,
  },
  toggleButtonContainer: {
  },
  deleteButtonText: {
    fontSize: 14,
    color: Primary(700),
  },
});
