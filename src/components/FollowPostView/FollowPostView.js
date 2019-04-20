import React from 'react';
import PropTypes from 'prop-types';

import InfiniteList from '../InfiniteList';
import FollowPostViewItem from '../FollowPostViewItem';

import styles from './styles';

const FollowPostView = ({
  posts,
  onPress,
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
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  onPress: PropTypes.func,
  loadMore: PropTypes.func,
  canLoadMore: PropTypes.bool,
};

FollowPostView.defaultProps = {
  onPress: () => {},
  loadMore: () => {},
  canLoadMore: true,
};

export default FollowPostView;
