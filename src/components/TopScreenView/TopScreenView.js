import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
} from 'react-native';

import TriggerScrollView from '../TriggerScrollView';

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
    this.offset = new Animated.Value(0);
  }

  startHeaderAnimation = (toValue, duration = 100) => {
    Animated.timing(this.offset, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  handleScrollDown = () => {
    const { navigation } = this.props;
    navigation.setParams({ isTabBarVisible: false });
    this.startHeaderAnimation(-Size.headerHeight);
  }

  handleScrollUp = () => {
    const { navigation } = this.props;
    navigation.setParams({ isTabBarVisible: true });
    this.startHeaderAnimation(0);
  }

  render() {
    const {
      renderHeader,
      children,
      animatedBottomTabBar,
    } = this.props;

    return (
      <View style={[styles.container, {
        marginBottom: animatedBottomTabBar ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        <Animated.View
          style={[styles.headerContainer, {
            transform: [{ translateY: this.offset }],
          }]}
        >
          {renderHeader()}
        </Animated.View>
        <TriggerScrollView
          onScrollDown={animatedBottomTabBar ? this.handleScrollDown : null}
          onScrollUp={animatedBottomTabBar ? this.handleScrollUp : null}
        >
          <View style={styles.paddingView} />
          {children}
        </TriggerScrollView>
      </View>
    );
  }
}
