import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { isEqual } from 'lodash';

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
  };

  static defaultProps = {
    onScrollTrigger: () => {},
    canLoadMoreContent: false,
    innerRef: () => {},
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
  };

  shouldComponentUpdate(nextProps) {
    const { data } = this.props;
    return !isEqual(data, nextProps.data);
  }

  render() {
    const {
      loadMoreContentAsync,
      renderSection,
      onScrollTrigger,
      canLoadMoreContent,
      innerRef,
    } = this.props;
    const { dataSource } = this.state;

    return (
      <ListView
        {...this.props}
        renderScrollComponent={props => (
          <TriggerScrollView
            {...props}
            onScrollDown={onScrollTrigger(false)}
            onScrollUp={onScrollTrigger(true)}
            ref={innerRef}
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
