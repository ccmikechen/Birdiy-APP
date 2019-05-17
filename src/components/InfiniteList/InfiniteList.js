import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { isEqual } from 'lodash';

import Refresh from '../Refresh';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';

const TriggerScrollView = scrollViewTrigger(InfiniteScrollView);

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class InfiniteList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    loadMoreContentAsync: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    const { dataSource } = prevState;
    const ids = data.map((_, index) => index);

    return {
      ...prevState,
      dataSource: dataSource.cloneWithRows(data, ids),
    };
  }

  state = {
    dataSource: new ListView.DataSource({ rowHasChanged }),
    onScrollTrigger: () => {},
    canLoadMoreContent: false,
    refreshing: false,
  };

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

  render() {
    const {
      loadMoreContentAsync,
      renderSection,
      onScrollTrigger,
      canLoadMoreContent,
      innerRef,
      refresh,
    } = this.props;
    const { dataSource, refreshing } = this.state;

    return (
      <ListView
        {...this.props}
        renderScrollComponent={props => (
          <TriggerScrollView
            {...props}
            onScrollDown={onScrollTrigger(false)}
            onScrollUp={onScrollTrigger(true)}
            ref={innerRef}
            refreshControl={refresh && (
              <Refresh
                refreshing={refreshing}
                onRefresh={this.handleRefresh}
              />
            )}
          />
        )}
        dataSource={dataSource}
        renderRow={renderSection}
        canLoadMore={canLoadMoreContent}
        onLoadMoreAsync={loadMoreContentAsync}
        enableEmptySections
      />
    );
  }
}
