import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TabView } from 'react-native-tab-view';

import AnimatedHeader from '../AnimatedHeader';
import InfiniteList from '../InfiniteList';
import AnimatedTopTabBar from '../AnimatedTopTabBar';

import Size from '../../constants/Size';

import styles from './styles';

export default class InfiniteTabsScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    animatedScroll: PropTypes.bool,
    onToggleTabBar: PropTypes.func,
    tabs: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    loadMoreContentAsync: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
  };

  state = {
    isHeaderVisible: true,
    canLoadMoreContent: true,
    tabIndex: 0,
  };

  handleVisible = visible => () => {
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

  renderScene = ({ route }) => {
    const {
      tabs,
      loadMoreContentAsync,
      renderSection,
    } = this.props;
    const { canLoadMoreContent } = this.state;
    const tab = tabs[route.key];

    return (
      <View>
        <View style={styles.tabBarPaddingView} />
        <InfiniteList
          data={tab.data}
          loadMoreContentAsync={loadMoreContentAsync(route.key)}
          renderSection={renderSection(route.key)}
          onScrollTrigger={this.handleVisible}
          canLoadMoreContent={canLoadMoreContent}
          renderHeader={() => <View style={styles.paddingView} />}
        />
      </View>
    );
  };

  render() {
    const {
      renderHeader,
      animatedScroll,
      tabs,
    } = this.props;
    const {
      isHeaderVisible,
      tabIndex,
    } = this.state;
    const navigationState = {
      index: tabIndex,
      routes: Object.keys(tabs).map(key => ({
        key,
        title: tabs[key].title,
      })),
    };

    return (
      <View style={[styles.container, {
        marginBottom: animatedScroll ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        <TabView
          navigationState={navigationState}
          renderScene={this.renderScene}
          onIndexChange={(index) => {
            this.handleVisible(true)();
            this.setState({ tabIndex: index });
          }}
          renderTabBar={props => (
            <AnimatedTopTabBar {...props} visible={isHeaderVisible} />
          )}
        />
      </View>
    );
  }
}
