/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
import UserListItem from '../../containers/UserListItem';

import styles from './styles';

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    loadMore: PropTypes.func.isRequired,
    renderNoItem: PropTypes.func,
    refreshing: PropTypes.bool,
    renderRefresh: PropTypes.func,
    onScrollTrigger: PropTypes.func,
    onUserPress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
    refresh: PropTypes.func,
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    users: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onUserPress: () => () => {},
    headerPadding: false,
    canLoadMore: false,
    refresh: null,
    innerRef: null,
  };

  renderItem = ({ item }) => {
    const { onUserPress } = this.props;

    return (
      <UserListItem
        user={item}
        onPress={onUserPress}
      />
    );
  };

  render() {
    const {
      users,
      loadMore,
      renderNoItem,
      refreshing,
      renderRefresh,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
      refresh,
      innerRef,
    } = this.props;

    if (refreshing) {
      return renderRefresh();
    }

    if (!users) {
      return renderNoItem();
    }

    return (
      <View style={styles.container}>
        <InfiniteList
          ref={innerRef}
          data={users}
          loadMoreContentAsync={loadMore}
          renderItem={this.renderItem}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          ListHeaderComponent={() => (headerPadding ? (
            <View style={styles.paddingView} />
          ) : null)}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('projects.emptyMessage')}
              style={{ paddingTop: 200 }}
            />
)}
          ListFooterComponent={
            <View style={styles.bottomPaddingView} />
          }
          refresh={refresh}
          keyExtractor={item => item.__id}
        />
      </View>
    );
  }
}
