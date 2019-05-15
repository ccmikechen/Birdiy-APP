import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import i18n from 'i18n-js';

import { FlatGrid } from 'react-native-super-grid';

import styles from './styles';

const SPACING = 5;
const DIMENSION = Dimensions.get('window').width / 3 - SPACING * 2;

const SelectableCategoriesTable = ({
  categories,
  onSelect,
  selection,
  multipleSelect,
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
          source={item.image ? { uri: item.image } : null}
          style={[
            styles.imageBackground,
            !multipleSelect || selection[index]
              ? styles.selection
              : null,
          ]}
          imageStyle={styles.image}
        >
          <Text style={styles.name}>
            {i18n.t(`categories.${item.name}`, { defaultValue: item.name })}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    )}
  />
);

SelectableCategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  })),
  onSelect: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.bool),
  multipleSelect: PropTypes.bool,
};

SelectableCategoriesTable.defaultProps = {
  categories: [],
  onSelect: () => {},
  selection: [],
  multipleSelect: false,
};

export default SelectableCategoriesTable;
