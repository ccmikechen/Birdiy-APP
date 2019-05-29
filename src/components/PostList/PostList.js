/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
import PostSection from '../../containers/PostSection';

import styles from './styles';

export default class PostList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    loadMore: PropTypes.func.isRequired,
    renderNoItem: PropTypes.func,
    refreshing: PropTypes.bool,
    renderRefresh: PropTypes.func,
    onScrollTrigger: PropTypes.func,
    onUserPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    onImagePress: PropTypes.func,
    onProjectPress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
    refresh: PropTypes.func,
  };

  static defaultProps = {
    posts: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onUserPress: () => {},
    onActionButtonPress: () => {},
    onImagePress: () => {},
    onProjectPress: () => {},
    headerPadding: false,
    canLoadMore: false,
    refresh: null,
  };

  renderPost = ({ item: post }) => {
    const {
      onUserPress,
      onActionButtonPress,
      onImagePress,
      onProjectPress,
    } = this.props;

    return (
      <View style={styles.postContainer}>
        <PostSection
          post={post}
          onUserPress={onUserPress}
          onActionButtonPress={onActionButtonPress}
          onImagePress={onImagePress}
          onProjectPress={onProjectPress}
        />
      </View>
    );
  };

  scrollToTop = () => {
    if (!this.scrollView) {
      return;
    }
    this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
  };

  render() {
    const {
      posts,
      loadMore,
      renderNoItem,
      refreshing,
      renderRefresh,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
      refresh,
    } = this.props;

    if (refreshing) {
      return renderRefresh();
    }

    if (!posts) {
      return renderNoItem();
    }

    return (
      <View style={styles.container}>
        <InfiniteList
          data={posts}
          loadMoreContentAsync={loadMore}
          renderItem={this.renderPost}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          ListHeaderComponent={() => (headerPadding ? (
            <View style={styles.paddingView} />
          ) : null)}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('posts.emptyMessage')}
              style={{ paddingTop: 200 }}
            />
)}
          innerRef={(ref) => { this.scrollView = ref; }}
          refresh={refresh}
          keyExtractor={item => item.__id}
        />
      </View>
    );
  }
}
