import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import PostList from '../components/PostList';

class UserPostList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      user: PropTypes.shape({
        posts: PropTypes.shape({
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
    const data = query.user.posts.edges.map(({ node }) => node);

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
  UserPostList,
  {
    query: graphql`
      fragment UserPostList_query on RootQueryType {
        user(id: $id) {
          posts(
            first: $count,
            after: $cursor
          ) @connection(key: "UserPostList_posts") {
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
      props.query && props.query.user.posts
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: ({ userId }, { count, cursor }) => ({
      count,
      cursor,
      id: userId,
    }),
    variables: { cursor: null },
    query: graphql`
      query UserPostListPaginationQuery (
        $count: Int!,
        $cursor: String,
        $id: ID!,
      ) {
        ...UserPostList_query
      }
    `,
  },
);
