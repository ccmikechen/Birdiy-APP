import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
} from 'react-native';

import styles from './styles';

const HEADER_OFFSET = 80;

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

  state = {
    offset: new Animated.Value(0),
  };

  constructor() {
    super();
    this.lastY = 0;
    this.isTabBarHidden = false;
  }

  startHeaderAnimation = (toValue, duration = 200) => {
    const { offset } = this.state;
    Animated.timing(offset, { toValue, duration }).start();
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
      this.startHeaderAnimation(-HEADER_OFFSET);
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
    const { offset } = this.state;

    return (
      <View style={[styles.container, {
        marginBottom: animatedBottomTabBar ? 0 : 60,
      }]}
      >
        <Animated.View style={[styles.headerContainer, { top: offset }]}>
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
