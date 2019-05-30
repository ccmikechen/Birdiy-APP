import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ViewPager } from 'rn-viewpager';

import AnimatedTopTabBar from '../AnimatedTopTabBar';

import styles from './styles';

export default class TabsPager extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ])).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    tabsScrollable: PropTypes.bool,
    onChangeTab: PropTypes.func,
    onScrollTrigger: PropTypes.func,
    tabIndex: PropTypes.number,
    isHeaderVisible: PropTypes.bool,
  };

  static defaultProps = {
    tabsScrollable: false,
    onChangeTab: () => {},
    onScrollTrigger: () => {},
    tabIndex: 0,
    isHeaderVisible: true,
  };

  handleTabChange = (index) => {
    const { onChangeTab } = this.props;
    onChangeTab(index);
    this.pager.setPage(index);
  };

  handlePageChange = ({ position }) => {
    const { onChangeTab } = this.props;
    onChangeTab(position);
  };

  handleScrollTrigger = index => visible => () => {
    const { onScrollTrigger, tabIndex } = this.props;

    if (tabIndex === index) {
      onScrollTrigger(visible)();
    }
  };

  render() {
    const {
      tabs,
      children,
      tabsScrollable,
      isHeaderVisible,
      tabIndex,
    } = this.props;

    const newChildren = React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        onScrollTrigger: this.handleScrollTrigger(index),
      })
    ));

    return (
      <View style={styles.contentContainer}>
        <View style={styles.tabBarPaddingView} />
        <AnimatedTopTabBar
          visible={isHeaderVisible}
          tabs={tabs}
          index={tabIndex}
          onChange={this.handleTabChange}
          scrollable={tabsScrollable}
        />
        <ViewPager
          ref={(ref) => { this.pager = ref; }}
          style={styles.pageContainer}
          onPageSelected={this.handlePageChange}
          initialPage={tabIndex}
        >
          {newChildren}
        </ViewPager>
      </View>
    );
  }
}
