import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  ViewPropTypes,
} from 'react-native';
import i18n from 'i18n-js';

import Colors from '../../constants/Colors';

import styles from './styles';

export default class PureTextInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    errorPrefix: PropTypes.bool,
    onChangeText: PropTypes.func,
    style: ViewPropTypes.style,
    counter: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    value: null,
    error: undefined,
    errorPrefix: false,
    onChangeText: () => {},
    style: {},
    counter: false,
    maxLength: null,
    placeholder: null,
  };

  state = {
    width: '99%',
  };

  componentDidMount() {
    // Solving copy-paste issue
    setTimeout(() => {
      this.setState({ width: '100%' });
    }, 100);
  }

  render() {
    const {
      style,
      counter,
      maxLength,
      placeholder,
      value,
      error,
      errorPrefix,
    } = this.props;
    const { width } = this.state;

    const parsedPlaceholder = error && errorPrefix
      ? `${i18n.t('general.bracket', { text: error })}${placeholder}`
      : placeholder;

    return (
      <View style={[styles.container, style, error ? styles.error : null]}>
        <TextInput
          {...this.props}
          style={[styles.input, { width }]}
          underlineColorAndroid="transparent"
          placeholder={parsedPlaceholder}
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
  }
}
