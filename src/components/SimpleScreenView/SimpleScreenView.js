import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

export default class SimpleScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    animatedScroll: PropTypes.bool,
    headerPadding: PropTypes.bool,
    onToggleTabBar: PropTypes.func,
    fullScreen: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    headerPadding: true,
    fullScreen: false,
    children: null,
    loading: false,
  };

  state = {
    isHeaderVisible: true,
  };

  setHeaderVisible = (visible) => {
    const {
      navigation,
      animatedScroll,
      onToggleTabBar,
    } = this.props;

    if (!animatedScroll) {
      return;
    }

    navigation.setParams({ isTabBarVisible: visible });
    this.setState({ isHeaderVisible: visible });
    onToggleTabBar(visible);
  };

  render() {
    const {
      renderHeader,
      children,
      animatedScroll,
      headerPadding,
      fullScreen,
      loading,
    } = this.props;
    const { isHeaderVisible } = this.state;

    const newChildren = React.Children.map(children, child => (
      child && React.cloneElement(child, {
        onScrollTrigger: visible => () => this.setHeaderVisible(visible),
        onScrollDown: () => this.setHeaderVisible(false),
        onScrollUp: () => this.setHeaderVisible(true),
        isHeaderVisible,
      })
    ));

    return (
      <View style={styles.container}>
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={!animatedScroll || isHeaderVisible}
        />
        {animatedScroll || !headerPadding ? null : (
          <View style={styles.paddingView} />
        )}
        {loading ? <LoadingIndicator /> : newChildren}
        {animatedScroll || fullScreen ? null : (
          <View style={styles.bottomTabBarPaddingView} />
        )}
      </View>
    );
  }
}
