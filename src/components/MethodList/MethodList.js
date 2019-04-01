/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import MethodListItem from '../MethodListItem';

import styles from './styles';

const MethodList = ({ methods }) => (
  <View style={styles.container}>
    {methods.map((method, index) => (
      <MethodListItem
        key={`method-${index}`}
        method={method}
        order={index + 1}
      />
    ))}
  </View>
);

MethodList.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
};

export default MethodList;
