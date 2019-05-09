import { StyleSheet } from 'react-native';

import { TextColor, Tertiary } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Tertiary(100),
    marginBottom: 5,
  },
  imageContainer: {
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1.33,
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: TextColor.secondaryDark,
  },
  contentContainer: {
    padding: 10,
    paddingTop: 0,
  },
  content: {
    fontSize: 15,
    color: TextColor.sectionTitle,
    lineHeight: 26,
  },
});
