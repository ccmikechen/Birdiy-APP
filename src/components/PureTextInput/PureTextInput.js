import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  ViewPropTypes,
} from 'react-native';

import Colors from '../../constants/Colors';

import styles from './styles';

const PureTextInput = (props) => {
  const {
    style,
    counter,
    maxLength,
    value,
    error,
  } = props;

  return (
    <View style={[styles.container, style, error ? styles.error : null]}>
      <TextInput
        {...props}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor={error ? Colors.danger : Colors.placeholder}
      />
      {counter && (
        <View style={styles.counterContainer}>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {value.length}
              /
              {maxLength}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

PureTextInput.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
  style: ViewPropTypes.style,
  counter: PropTypes.bool,
  maxLength: PropTypes.number,
};

PureTextInput.defaultProps = {
  value: null,
  error: undefined,
  onChangeText: () => {},
  style: {},
  counter: false,
  maxLength: null,
};

export default PureTextInput;
