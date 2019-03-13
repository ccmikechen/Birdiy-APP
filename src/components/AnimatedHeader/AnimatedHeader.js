import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import Size from '../../constants/Size';

import styles from './styles';

const offset = new Animated.Value(0);

const startOffsetAnimation = (toValue, duration) => {
  Animated.timing(offset, {
    toValue,
    duration,
    useNativeDriver: true,
  }).start();
};

export default class AnimatedHeader extends Component {
  static propTypes = {
    renderHeader: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    duration: 100,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { duration, visible } = nextProps;

    const wasVisible = prevState.isVisible;

    if (wasVisible && !visible) {
      startOffsetAnimation(-Size.headerHeight, duration);
    } else if (visible && !wasVisible) {
      startOffsetAnimation(0, duration);
    }

    return { ...prevState, isVisible: visible };
  }

  state = {
    isVisible: true,
  };

  render() {
    const { renderHeader } = this.props;

    return (
      <Animated.View
        style={[styles.container, {
          transform: [{ translateY: offset }],
        }]}
      >
        {renderHeader()}
      </Animated.View>
    );
  }
}
