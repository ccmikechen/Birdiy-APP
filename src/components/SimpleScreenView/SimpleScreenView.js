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
    onToggleTabBar: PropTypes.func,
    fullScreen: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    fullScreen: false,
    children: null,
    loading: false,
  };

  state = {
    isHeaderVisible: true,
  };

  handleVisible = (visible) => {
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
      fullScreen,
      loading,
    } = this.props;
    const { isHeaderVisible } = this.state;

    const newChildren = React.Children.map(children, child => (
      child && React.cloneElement(child, {
        onScrollTrigger: visible => () => this.handleVisible(visible),
        onScrollDown: () => this.handleVisible(false),
        onScrollUp: () => this.handleVisible(true),
        isHeaderVisible,
      })
    ));

    return (
      <View style={styles.container}>
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        {loading ? <LoadingIndicator /> : newChildren}
        {animatedScroll || fullScreen ? null : (
          <View style={styles.bottomTabBarPaddingView} />
        )}
      </View>
    );
  }
}
