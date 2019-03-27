import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const PureSelector = ({
  style,
  value,
  placeholder,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
  >
    <Text style={[
      styles.value,
      value === null ? styles.placeholder : null,
    ]}
    >
      { value === null ? placeholder : value}
    </Text>
  </TouchableOpacity>
);

PureSelector.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

PureSelector.defaultProps = {
  value: null,
  placeholder: '',
  onPress: () => {},
  style: {},
};

export default PureSelector;
