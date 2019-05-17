import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { ViewPager } from 'rn-viewpager';

import AnimatedHeader from '../AnimatedHeader';
import AnimatedTopTabBar from '../AnimatedTopTabBar';
import LoadingIndicator from '../LoadingIndicator';

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
    loading: PropTypes.bool,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    style: {},
    loading: false,
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

  changeTab = (index) => {
    const { navigation, onToggleTabBar } = this.props;

    this.setState({ tabIndex: index, isHeaderVisible: true });
    navigation.setParams({ isTabBarVisible: true });
    onToggleTabBar(true);
  };

  handleTabChange = (index) => {
    this.changeTab(index);
    this.pager.setPage(index);
  };

  handlePageChange = ({ position }) => {
    this.changeTab(position);
  };

  render() {
    const {
      renderHeader,
      animatedScroll,
      tabs,
      style,
      children,
      loading,
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
      <View style={[styles.container, style]}>
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        {loading ? (
          <LoadingIndicator />
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.tabBarPaddingView} />
            <AnimatedTopTabBar
              visible={isHeaderVisible}
              tabs={tabs.map(({ title }) => title)}
              index={tabIndex}
              onChange={this.handleTabChange}
            />
            <ViewPager
              ref={(ref) => { this.pager = ref; }}
              style={styles.pageContainer}
              onPageSelected={this.handlePageChange}
            >
              {newChildren}
            </ViewPager>
          </View>
        )}
        {animatedScroll ? null : (
          <View style={styles.bottomTabBarPaddingView} />
        )}
      </View>
    );
  }
}
