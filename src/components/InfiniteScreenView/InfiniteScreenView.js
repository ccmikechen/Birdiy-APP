import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import InfiniteList from '../InfiniteList';

import Size from '../../constants/Size';

import styles from './styles';

export default class InfiniteScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    animatedScroll: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    loadMoreContentAsync: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
    onToggleTabBar: PropTypes.func,
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
  };

  state = {
    isHeaderVisible: true,
    canLoadMoreContent: true,
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

  render() {
    const {
      data,
      renderHeader,
      animatedScroll,
      loadMoreContentAsync,
      renderSection,
    } = this.props;
    const {
      isHeaderVisible,
      canLoadMoreContent,
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
        <InfiniteList
          data={data}
          loadMoreContentAsync={loadMoreContentAsync}
          renderSection={renderSection}
          onScrollTrigger={this.handleVisible}
          canLoadMoreContent={canLoadMoreContent}
          renderHeader={() => <View style={styles.paddingView} />}
        />
      </View>
    );
  }
}
