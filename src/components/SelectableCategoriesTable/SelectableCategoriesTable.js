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

const SelectableCategoriesTable = ({
  categories,
  onSelect,
  selection,
}) => (
  <FlatGrid
    itemDimension={DIMENSION}
    spacing={SPACING}
    items={categories}
    style={styles.container}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onSelect(index)}
        activeOpacity={0.9}
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.imageBackground,
            selection[index] ? styles.selection : null,
          ]}
          imageStyle={styles.image}
        >
          <Text style={styles.name}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )}
  />
);

SelectableCategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.number,
  })).isRequired,
  onSelect: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.bool),
};

SelectableCategoriesTable.defaultProps = {
  onSelect: () => {},
  selection: [],
};

export default SelectableCategoriesTable;
