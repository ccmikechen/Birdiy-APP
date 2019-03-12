import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import styles from './styles';

const SPACING = 5;
const DIMENSION = Dimensions.get('window').width / 3 - SPACING * 2;

const CategoriesTable = ({ categories, onPressCategory }) => (
  <FlatGrid
    itemDimension={DIMENSION}
    spacing={SPACING}
    items={categories}
    style={styles.container}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={onPressCategory(index)}
      >
        <ImageBackground
          source={item.image}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.name}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )}
  />
);

CategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.number,
  })).isRequired,
  onPressCategory: PropTypes.func,
};

CategoriesTable.defaultProps = {
  onPressCategory: () => {},
};

export default CategoriesTable;
