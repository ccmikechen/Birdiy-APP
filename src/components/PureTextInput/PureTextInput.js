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
  } = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...props}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.placeholder}
        keyboardShouldPersistTaps="always"
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
  onChangeText: PropTypes.func,
  style: ViewPropTypes.style,
  counter: PropTypes.bool,
  maxLength: PropTypes.number,
};

PureTextInput.defaultProps = {
  value: null,
  onChangeText: () => {},
  style: {},
  counter: false,
  maxLength: null,
};

export default PureTextInput;
