import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import PostList from '../components/PostList';

class FollowingPostList extends Component {
  static propTypes = {
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object,
      })),
    }),
  };

  static defaultProps = {
    posts: null,
  };

  loadMore = async () => {
  }

  render() {
    const { posts } = this.props;
    const data = posts && posts.edges.map(({ node }) => node);

    return data ? (
      <PostList
        {...this.props}
        posts={data}
        loadMore={this.loadMore}
      />
    ) : null;
  }
}


export default createFragmentContainer(
  FollowingPostList,
  graphql`
    fragment FollowingPostList_posts on PostConnection {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...PostSection_post
        }
      }
    }
  `,
);
