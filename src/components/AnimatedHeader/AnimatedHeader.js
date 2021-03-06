import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import Size from '../../constants/Size';

import styles from './styles';

const startOffsetAnimation = (offset, toValue, duration) => {
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
    const { offset } = prevState;

    const wasVisible = prevState.isVisible;

    if (wasVisible && !visible) {
      startOffsetAnimation(offset, -Size.headerHeight, duration);
    } else if (visible && !wasVisible) {
      startOffsetAnimation(offset, 0, duration);
    }

    return { ...prevState, isVisible: visible };
  }

  state = {
    isVisible: true,
    offset: new Animated.Value(0),
  };

  render() {
    const { renderHeader } = this.props;
    const { offset } = this.state;

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
