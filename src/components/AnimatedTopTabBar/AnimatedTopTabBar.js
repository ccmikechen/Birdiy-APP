import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';

import Size from '../../constants/Size';

import styles from './styles';

const startOffsetAnimation = (offset, toValue, duration) => {
  Animated.timing(offset, {
    toValue,
    duration,
    useNativeDriver: true,
  }).start();
};

export default class AnimatedTopTabBar extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    index: PropTypes.number,
  };

  static defaultProps = {
    duration: 100,
    index: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { duration, visible } = nextProps;
    const { offset } = prevState;

    const wasVisible = prevState.isVisible;

    if (wasVisible && !visible) {
      const translate = -Size.headerHeight;
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

  shouldComponentUpdate(nextProps) {
    const { visible, index } = this.props;

    return (visible !== nextProps.visible)
      || (index !== nextProps.index);
  }

  render() {
    const { index } = this.props;
    const { offset } = this.state;

    return (
      <Animated.View
        style={[styles.tabBarContainer, {
          transform: [{ translateY: offset }],
        }]}
      >
        <ScrollableTabBar
          {...this.props}
          activeTab={index}
          style={styles.tabBar}
          scrollOffset={0}
        />
      </Animated.View>
    );
  }
}
