import React from 'react';
import PropTypes from 'prop-types';

import InfiniteList from '../InfiniteList';
import FollowPostViewItem from '../FollowPostViewItem';

import styles from './styles';

const FollowPostView = ({
  posts,
  onPress,
  onUserPress,
  loadMore,
  canLoadMore,
}) => (
  <InfiniteList
    style={styles.container}
    data={posts}
    renderSection={post => (
      <FollowPostViewItem
        post={post}
        onPress={onPress}
        onUserPress={onUserPress}
      />
    )}
    loadMoreContentAsync={loadMore}
    canLoadMoreContent={canLoadMore}
    horizontal
  />
);

FollowPostView.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      image: PropTypes.string,
    }),
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  onPress: PropTypes.func,
  onUserPress: PropTypes.func,
  loadMore: PropTypes.func,
  canLoadMore: PropTypes.bool,
};

FollowPostView.defaultProps = {
  onPress: () => {},
  onUserPress: () => {},
  loadMore: () => {},
  canLoadMore: true,
};

export default FollowPostView;
