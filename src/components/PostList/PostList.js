import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import InfiniteList from '../InfiniteList';
import PostSection from '../../containers/PostSection';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

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
    onImagePress: PropTypes.func,
    onSourcePress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
  };

  static defaultProps = {
    posts: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onUserPress: () => {},
    onImagePress: () => {},
    onSourcePress: () => {},
    headerPadding: false,
    canLoadMore: false,
  };

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch(() => {});
  };

  handleUnfollowUser = (id) => {
    const mutation = new CancelFollowUserMutation({ id });
    mutation.commit().catch(() => {});
  };

  renderPost = (post) => {
    const {
      onUserPress,
      onImagePress,
      onSourcePress,
    } = this.props;

    return (
      <View style={styles.postContainer}>
        <PostSection
          post={post}
          onUserPress={onUserPress}
          onImagePress={onImagePress}
          onFollowUser={this.handleFollowUser}
          onUnfollowUser={this.handleUnfollowUser}
          onSourcePress={onSourcePress}
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
    } = this.props;

    if (refreshing) {
      return renderRefresh();
    }

    if (!posts) {
      return renderNoItem();
    }

    return (
      <InfiniteList
        data={posts}
        loadMoreContentAsync={loadMore}
        renderSection={this.renderPost}
        onScrollTrigger={onScrollTrigger}
        canLoadMoreContent={canLoadMore}
        renderHeader={() => (headerPadding ? (
          <View style={styles.paddingView} />
        ) : null)}
        innerRef={(ref) => { this.scrollView = ref; }}
      />
    );
  }
}
