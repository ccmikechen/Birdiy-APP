import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import InfiniteList from '../InfiniteList';
import AnimatedTopTabBar from '../AnimatedTopTabBar';
import AnimatedMultipleView from '../AnimatedMultipleView';

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
    tabs: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
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

  renderScene = (key, data) => {
    const {
      loadMoreContentAsync,
      renderSection,
    } = this.props;
    const { canLoadMoreContent } = this.state;

    return (
      <View key={key}>
        <View style={styles.tabBarPaddingView} />
        <InfiniteList
          data={data}
          loadMoreContentAsync={loadMoreContentAsync(key)}
          renderSection={renderSection(key)}
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
      data,
      navigation,
      onToggleTabBar,
    } = this.props;
    const {
      isHeaderVisible,
      tabIndex,
    } = this.state;

    return (
      <View style={[styles.container, {
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
          {tabs.map(({ key }) => this.renderScene(key, data[key]))}
        </AnimatedMultipleView>
      </View>
    );
  }
}
