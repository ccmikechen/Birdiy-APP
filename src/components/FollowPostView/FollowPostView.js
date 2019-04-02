import React from 'react';
import PropTypes from 'prop-types';

import InfiniteList from '../InfiniteList';
import FollowPostViewItem from '../FollowPostViewItem';

import styles from './styles';

const FollowPostView = ({
  posts,
  onPress,
  loadMore,
  hasMore,
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
    canLoadMoreContent={hasMore}
    horizontal
  />
);

FollowPostView.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  onPress: PropTypes.func,
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
};

FollowPostView.defaultProps = {
  onPress: () => {},
  loadMore: () => {},
  hasMore: true,
};

export default FollowPostView;
