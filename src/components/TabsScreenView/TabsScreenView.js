import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import AnimatedTopTabBar from '../AnimatedTopTabBar';
import AnimatedMultipleView from '../AnimatedMultipleView';

import Size from '../../constants/Size';

import styles from './styles';

export default class TabsScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    animatedScroll: PropTypes.bool,
    onToggleTabBar: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    style: {},
  };

  state = {
    isHeaderVisible: true,
    tabIndex: 0,
  };

  handleVisible = index => visible => () => {
    const { tabIndex } = this.state;
    if (index !== tabIndex) {
      return;
    }

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
      animatedScroll,
      tabs,
      navigation,
      onToggleTabBar,
      style,
      children,
    } = this.props;
    const {
      isHeaderVisible,
      tabIndex,
    } = this.state;

    const newChildren = React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        onScrollTrigger: this.handleVisible(index),
      })
    ));

    return (
      <View style={[styles.container, style, {
        marginBottom: animatedScroll ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        <AnimatedTopTabBar
          visible={isHeaderVisible}
          tabs={tabs.map(({ title }) => title)}
          index={tabIndex}
          onChange={(index) => {
            this.setState({ tabIndex: index, isHeaderVisible: true });
            navigation.setParams({ isTabBarVisible: true });
            onToggleTabBar(true);
          }}
        />
        <AnimatedMultipleView index={tabIndex}>
          {newChildren}
        </AnimatedMultipleView>
      </View>
    );
  }
}
