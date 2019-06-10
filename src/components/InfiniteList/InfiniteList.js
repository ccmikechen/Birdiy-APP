import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { isEqual } from 'lodash';

import Refresh from '../Refresh';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';

const TriggerScrollView = scrollViewTrigger(InfiniteScrollView);

export default class InfiniteList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    loadMoreContentAsync: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    onScrollTrigger: PropTypes.func,
    canLoadMoreContent: PropTypes.bool,
    innerRef: PropTypes.func,
    refresh: PropTypes.func,
  };

  static defaultProps = {
    onScrollTrigger: () => {},
    canLoadMoreContent: false,
    innerRef: () => {},
    refresh: null,
  };

  state = {
    refreshing: false,
  };

  y = 0;

  shouldComponentUpdate(nextProps, nextState) {
    const { data } = this.props;
    const { refreshing } = this.state;

    return !isEqual(data, nextProps.data)
      || nextState.refreshing !== refreshing;
  }

  handleCallback = () => {
    this.setState({ refreshing: false });
  };

  handleRefresh = () => {
    const { refresh } = this.props;

    this.setState({ refreshing: true });
    refresh(() => this.setState({ refreshing: false }));
  };

  refresh = () => {
    this.handleRefresh();
  };

  handleScroll = (e) => {
    this.y = e.nativeEvent.contentOffset.y;
  };

  scrollToTop = () => {
    this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  };

  scrollToTopOrRefresh = () => {
    if (this.isOnTop()) {
      this.refresh();
    } else {
      this.scrollToTop();
    }
  };

  isOnTop = () => (
    this.y === 0
  );

  render() {
    const {
      loadMoreContentAsync,
      onScrollTrigger,
      canLoadMoreContent,
      innerRef,
      refresh,
      data,
      ...restProps
    } = this.props;
    const { refreshing } = this.state;

    return (
      <FlatList
        renderScrollComponent={props => (
          <TriggerScrollView
            {...props}
            onScroll={(e) => {
              this.handleScroll(e);
              props.onScroll(e);
            }}
            onScrollDown={onScrollTrigger(false)}
            onScrollUp={onScrollTrigger(true)}
            ref={(ref) => {
              this.scrollView = ref;
              innerRef(ref);
            }}
            refreshControl={refresh && (
              <Refresh
                refreshing={refreshing}
                onRefresh={this.handleRefresh}
              />
            )}
          />
        )}
        data={data}
        canLoadMore={canLoadMoreContent}
        onLoadMoreAsync={loadMoreContentAsync}
        keyExtractor={(item, index) => `${index}`}
        extraData={this.props}
        initialNumToRender={5}
        removeClippedSubviews
        bounces={false}
        {...restProps}
      />
    );
  }
}
