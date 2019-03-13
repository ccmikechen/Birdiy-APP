import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
} from 'react-native';

import Size from '../../constants/Size';

import styles from './styles';

export default class TopScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    animatedBottomTabBar: PropTypes.bool,
  };

  static defaultProps = {
    animatedBottomTabBar: false,
    children: null,
  };

  constructor() {
    super();
    this.lastY = 0;
    this.isTabBarHidden = false;
    this.offset = new Animated.Value(0);
  }

  startHeaderAnimation = (toValue, duration = 100) => {
    Animated.timing(this.offset, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  handleScroll = (event) => {
    const { navigation } = this.props;
    const currentY = event.nativeEvent.contentOffset.y;

    if (currentY < 0) {
      return;
    }

    if (currentY - this.lastY > 3) {
      this.isTabBarHidden = true;
      this.lastY = currentY;
      navigation.setParams({ isTabBarVisible: false });
      this.startHeaderAnimation(-Size.headerHeight);
    } else if (currentY - this.lastY < -3) {
      this.isTabBarHidden = false;
      this.lastY = currentY;
      navigation.setParams({ isTabBarVisible: true });
      this.startHeaderAnimation(0);
    }
  };

  render() {
    const {
      renderHeader,
      children,
      animatedBottomTabBar,
    } = this.props;

    return (
      <View style={[styles.container, {
        marginBottom: animatedBottomTabBar ? 0 : 60,
      }]}
      >
        <Animated.View
          style={[styles.headerContainer, {
            transform: [{ translateY: this.offset }],
          }]}
        >
          {renderHeader()}
        </Animated.View>
        <Animated.ScrollView
          onScroll={animatedBottomTabBar ? this.handleScroll : null}
        >
          <View style={styles.paddingView} />
          {children}
        </Animated.ScrollView>
      </View>
    );
  }
}
