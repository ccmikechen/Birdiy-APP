import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import i18n from 'i18n-js';
import Ripple from 'react-native-material-ripple';
import { FlatGrid } from 'react-native-super-grid';

import styles from './styles';

const SPACING = 5;
const DIMENSION = Dimensions.get('window').width / 3 - SPACING * 2;

const CategoriesTable = ({ categories, onCategoryPress }) => (
  <FlatGrid
    itemDimension={DIMENSION}
    spacing={SPACING}
    items={categories}
    style={styles.container}
    renderItem={({ item }) => (
      <Ripple
        style={styles.itemContainer}
        onPress={() => onCategoryPress(item)}
      >
        <ImageBackground
          source={item.image ? { uri: item.image } : null}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.name}>
            {i18n.t(`categories.${item.name}`, { defaultValue: item.name })}
          </Text>
        </ImageBackground>
      </Ripple>
    )}
  />
);

CategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
  onCategoryPress: PropTypes.func,
};

CategoriesTable.defaultProps = {
  onCategoryPress: () => {},
};

export default CategoriesTable;
