import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { ScrollableTabBar } from 'react-native-scrollable-tab-view';

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
    activeTab: PropTypes.number,
  };

  static defaultProps = {
    duration: 100,
    activeTab: 0,
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
    const { visible, activeTab } = this.props;

    return (visible !== nextProps.visible)
      || (activeTab !== nextProps.activeTab);
  }

  render() {
    const { offset } = this.state;

    return (
      <Animated.View
        style={[styles.tabBarContainer, {
          transform: [{ translateY: offset }],
        }]}
      >
        <ScrollableTabBar
          {...this.props}
          style={styles.tabBar}
          scrollOffset={0}
        />
      </Animated.View>
    );
  }
}
