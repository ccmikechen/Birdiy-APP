/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import MaterialListItem from '../MaterialListItem';

import styles from './styles';

const MaterialList = ({
  materials,
  cart,
  onLinkPress,
  onCartToggle,
}) => (
  <View style={styles.container}>
    {materials.map((material, index) => (
      <MaterialListItem
        key={`material-${index}`}
        material={material}
        isInCart={cart.get(material.id) || false}
        onLinkPress={onLinkPress}
        onCartToggle={status => onCartToggle(material, status)}
      />
    ))}
  </View>
);

MaterialList.propTypes = {
  materials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amountUnit: PropTypes.string.isRequired,
    url: PropTypes.string,
  })).isRequired,
  cart: PropTypes.instanceOf(Map),
  onLinkPress: PropTypes.func,
  onCartToggle: PropTypes.func,
};

MaterialList.defaultProps = {
  cart: new Map(),
  onLinkPress: () => {},
  onCartToggle: () => {},
};

export default MaterialList;
