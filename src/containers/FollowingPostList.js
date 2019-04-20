import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import PostList from '../components/PostList';

class FollowingPostList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        following: PropTypes.shape({
          edges: PropTypes.arrayOf(PropTypes.shape({
            node: PropTypes.object,
          })),
        }),
      }),
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    batchLoad: 5,
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  render() {
    const { query, relay } = this.props;
    const data = query.viewer.following.edges.map(({ node }) => node);

    return query ? (
      <PostList
        {...this.props}
        posts={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
      />
    ) : null;
  }
}

export default createPaginationContainer(
  FollowingPostList,
  {
    query: graphql`
      fragment FollowingPostList_query on RootQueryType {
        viewer {
          following: followingUserPosts(
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
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.query && props.query.viewer.following
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      followingCursor: cursor,
    }),
    variables: { followingCursor: null },
    query: graphql`
      query FollowingPostListPaginationQuery (
        $count: Int!,
        $followingCursor: String
      ) {
        ...FollowingPostList_query
      }
    `,
  },
);
