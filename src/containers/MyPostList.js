import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import PostList from '../components/PostList';

class MyPostList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        posts: PropTypes.shape({
          edges: PropTypes.arrayOf(PropTypes.shape({
            node: PropTypes.object,
          })),
        }),
      }),
    }),
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    query: null,
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
    const data = query && query.viewer.posts.edges.map(({ node }) => node);

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
  MyPostList,
  {
    query: graphql`
      fragment MyPostList_query on RootQueryType {
        viewer {
          posts(
            first: $count,
            after: $cursor
          ) @connection(key: "MyPostList_posts") {
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
      props.query && props.query.viewer.posts
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      cursor,
    }),
    variables: { cursor: null },
    query: graphql`
      query MyPostListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...MyPostList_query
      }
    `,
  },
);
