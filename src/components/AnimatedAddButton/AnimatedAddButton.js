import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const startOffsetAnimation = (offset, toValue, duration) => {
  Animated.timing(offset, {
    toValue,
    duration,
    useNativeDriver: true,
  }).start();
};

export default class AnimatedAddButton extends Component {
  static propTypes = {
    renderIcon: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    translate: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    duration: 100,
    translate: 0,
    style: {},
    onPress: () => {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { duration, translate, visible } = nextProps;
    const { offset } = prevState;

    const wasVisible = prevState.isVisible;

    if (wasVisible && !visible) {
      startOffsetAnimation(offset, translate, duration);
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
    const { renderIcon, style, onPress } = this.props;
    const { offset } = this.state;

    return (
      <AnimatedTouchable
        style={[style, styles.container, {
          transform: [{ translateX: offset }],
        }]}
        onPress={onPress}
      >
        {renderIcon()}
      </AnimatedTouchable>
    );
  }
}
