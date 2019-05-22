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
  error,
  placeholder,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, style, error ? styles.error : null]}
    onPress={onPress}
  >
    <Text style={[
      styles.value,
      value === null ? styles.placeholder : null,
      error ? styles.errorValue : null,
    ]}
    >
      { value === null ? placeholder : value}
    </Text>
  </TouchableOpacity>
);

PureSelector.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

PureSelector.defaultProps = {
  value: null,
  error: undefined,
  placeholder: '',
  onPress: () => {},
  style: {},
};

export default PureSelector;
