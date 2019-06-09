import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import AnimatedTopTabBar from '../AnimatedTopTabBar';

import { TextColor, Secondary } from '../../constants/Colors';

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

  handleTabChange = ({ i }) => {
    const { onChangeTab } = this.props;
    onChangeTab(i);
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
      <View
        style={styles.page}
        tabLabel={tabs[index]}
      >
        {
          React.cloneElement(child, {
            onScrollTrigger: this.handleScrollTrigger(index),
          })
        }
      </View>
    ));

    return (
      <View style={styles.contentContainer}>
        <View style={styles.tabBarPaddingView} />
        <ScrollableTabView
          ref={(ref) => { this.pager = ref; }}
          renderTabBar={() => (
            <AnimatedTopTabBar
              visible={isHeaderVisible}
              scrollable={tabsScrollable}
            />
          )}
          style={styles.pageContainer}
          onChangeTab={this.handleTabChange}
          tabBarActiveTextColor={Secondary(500)}
          tabBarInactiveTextColor={TextColor.subDark}
          initialPage={tabIndex}
        >
          {newChildren}
        </ScrollableTabView>
      </View>
    );
  }
}
