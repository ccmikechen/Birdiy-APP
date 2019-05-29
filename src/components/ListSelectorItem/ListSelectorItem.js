import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'expo';

import { Primary } from '../../constants/Colors';

import styles from './styles';

export default class ListSelectorItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    selected: false,
    onPress: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const { selected } = this.props;
    return nextProps.selected !== selected;
  }

  render() {
    const { text, selected, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        {selected && (
          <View style={styles.selectedIconContainer}>
            <Icon.MaterialIcons
              name="check"
              size={26}
              color={Primary(700)}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  }
}
