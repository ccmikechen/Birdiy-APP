/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { Surface } from 'react-native-paper';

import MaterialListItem from '../MaterialListItem';

import styles from './styles';

const MaterialList = ({
  materials,
  onLinkPress,
  onAddPress,
}) => (
  <Surface style={styles.container}>
    {materials.map((material, index) => (
      <MaterialListItem
        key={`material-${index}`}
        material={material}
        onLinkPress={() => onLinkPress(material.link)}
        onAddPress={() => onAddPress(index)}
      />
    ))}
  </Surface>
);

MaterialList.propTypes = {
  materials: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
  onLinkPress: PropTypes.func,
  onAddPress: PropTypes.func,
};

MaterialList.defaultProps = {
  onLinkPress: () => {},
  onAddPress: () => {},
};

export default MaterialList;
