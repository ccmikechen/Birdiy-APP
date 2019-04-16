import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import PostList from '../components/PostList';

class FollowingPostList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      all: PropTypes.object,
    }),
  };

  static defaultProps = {
    query: null,
  };

  loadMore = async () => {
  }

  render() {
    const { query } = this.props;
    const data = query && query.following.edges.map(({ node }) => node);

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
    fragment FollowingPostList_query on RootQueryType {
      following: allPosts(
        first: $count,
        after: $followingCursor
      ) @connection(key: "FollowingPostList_following") {
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
    }
  `,
);
