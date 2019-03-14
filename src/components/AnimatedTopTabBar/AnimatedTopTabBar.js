import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { LinearGradient } from 'expo';
import { TabBar } from 'react-native-tab-view';

import Size from '../../constants/Size';
import Colors from '../../constants/Colors';

import styles from './styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

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
    onPress: PropTypes.func,
  };

  static defaultProps = {
    duration: 100,
    onPress: () => {},
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

  render() {
    const { offset } = this.state;

    return (
      <AnimatedLinearGradient
        colors={Colors.headerGradient}
        start={[0, 0]}
        end={[1, 0]}
        style={[styles.tabBarContainer, {
          transform: [{ translateY: offset }],
        }]}
      >
        <TabBar
          {...this.props}
          style={styles.tabBar}
          indicatorStyle={styles.indicator}
        />
      </AnimatedLinearGradient>
    );
  }
}
