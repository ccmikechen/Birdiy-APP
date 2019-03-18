import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StatusBar } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import styles from './styles';

const TAB_BAR_OFFSET = 60;
const offset = new Animated.Value(0);

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
    animationDuration: 200,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { animationDuration, navigation } = nextProps;

    if (!navigation) {
      return null;
    }

    const isVisible = getTabBarVisibleFromNavigationState(navigation);
    const wasVisible = prevState.isVisible;

    if (wasVisible && !isVisible) {
      Animated.timing(offset, {
        toValue: TAB_BAR_OFFSET,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    } else if (isVisible && !wasVisible) {
      Animated.timing(offset, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }

    return { ...prevState, isVisible };
  }

  state = {
    isVisible: true,
  };

  render() {
    const { isVisible } = this.state;

    return (
      <Animated.View
        style={[styles.container, {
          transform: [{ translateY: offset }],
        }]}
      >
        <StatusBar
          hidden={!isVisible}
          showHideTransition="slide"
        />
        <BottomTabBar
          {...this.props}
          style={styles.tabBar}
        />
      </Animated.View>
    );
  }
}
