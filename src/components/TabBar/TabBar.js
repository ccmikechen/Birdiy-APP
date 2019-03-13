import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import styles from './styles';

const TAB_BAR_OFFSET = -60;

const getTabBarVisibleFromNavigationState = (navigation) => {
  const mainRoute = navigation.state;
  const stackRoute = mainRoute.routes[mainRoute.index];
  const screenRoute = stackRoute.routes[stackRoute.index];

  if (screenRoute.params === undefined) {
    return true;
  }
  return screenRoute.params.isTabBarVisible;
};

export default class TabBar extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({
          routes: PropTypes.arrayOf(PropTypes.shape({
            params: PropTypes.shape({
              isTabBarVisible: PropTypes.bool,
            }),
          })),
        })),
        index: PropTypes.number,
      }),
    }),
    animationDuration: PropTypes.number,
  };

  static defaultProps = {
    navigation: undefined,
    animationDuration: 300,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { animationDuration, navigation } = nextProps;

    if (!navigation) {
      return null;
    }

    const isVisible = getTabBarVisibleFromNavigationState(navigation);
    const wasVisible = prevState.isVisible;

    if (wasVisible && !isVisible) {
      Animated.timing(prevState.offset, {
        toValue: TAB_BAR_OFFSET,
        duration: animationDuration,
      }).start();
    } else if (isVisible && !wasVisible) {
      Animated.timing(prevState.offset, {
        toValue: 0,
        duration: animationDuration,
      }).start();
    }

    return { ...prevState, isVisible };
  }

  state = {
    offset: new Animated.Value(0),
    isVisible: true,
  };

  render() {
    const { offset } = this.state;

    return (
      <BottomTabBar
        {...this.props}
        style={[styles.container, { bottom: offset }]}
      />
    );
  }
}
