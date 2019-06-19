import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

import { Primary } from '../../constants/Colors';

import styles from './styles';

export default class ToggleButton extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onPress: PropTypes.func,
    size: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    checked: false,
    onPress: () => {},
    size: 25,
    color: Primary(700),
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...prevState, checked: nextProps.checked };
  }

  handlePress = (e) => {
    const { onPress } = this.props;
    const { checked } = this.state;

    this.setState({ checked: !checked });
    onPress(e);
  };

  render() {
    const { size, color } = this.props;
    const { checked } = this.state;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handlePress}
      >
        <Icon.MaterialIcons
          name={checked ? 'check-circle' : 'radio-button-unchecked'}
          size={size}
          color={color}
        />
      </TouchableOpacity>
    );
  }
}
