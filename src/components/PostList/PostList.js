import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import InfiniteList from '../InfiniteList';
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
    onPostPress: PropTypes.func,
    headerPadding: PropTypes.bool,
  };

  static defaultProps = {
    posts: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onPostPress: () => {},
    headerPadding: false,
  };

  state = {
    canLoadMore: true,
  };

  renderPost = (post) => {
    const { onPostPress } = this.props;

    return (
      <View style={styles.postContainer}>
        <PostSection
          post={post}
          onPostPress={onPostPress(post.id)}
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
    } = this.props;
    const { canLoadMore } = this.state;

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
