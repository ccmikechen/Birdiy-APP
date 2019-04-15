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
  };

  static defaultProps = {
    posts: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onPostPress: () => {},
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
    } = this.props;
    const { canLoadMore } = this.state;

    if (refreshing) {
      return renderRefresh();
    }

    if (!posts) {
      return renderNoItem();
    }

    return (
      <View>
        <View style={styles.tabBarPaddingView} />
        <InfiniteList
          data={posts}
          loadMoreContentAsync={loadMore}
          renderSection={this.renderPost}
          onScrollTrigger={onScrollTrigger}
          canLoadMore={canLoadMore}
          renderHeader={() => <View style={styles.paddingView} />}
          innerRef={(ref) => { this.scrollView = ref; }}
        />
      </View>
    );
  }
}
