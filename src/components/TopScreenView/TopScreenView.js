import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
} from 'react-native';

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
  }

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
    } else if (currentY - this.lastY < -3) {
      this.isTabBarHidden = false;
      this.lastY = currentY;
      navigation.setParams({ isTabBarVisible: true });
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
        {renderHeader()}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          onScroll={animatedBottomTabBar ? this.handleScroll : null}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}
