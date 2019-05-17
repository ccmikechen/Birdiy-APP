import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';
import { View } from 'react-native';

import LoadingIndicator from '../components/LoadingIndicator';
import PostList from '../components/PostList';

import { DEFAULT_POST_BATCH_LOAD } from '../constants/defaults';

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
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
      refetchConnection: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    batchLoad: DEFAULT_POST_BATCH_LOAD,
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  render() {
    const { query, relay, batchLoad } = this.props;

    if (!query.viewer) {
      return (
        <View style={{ flex: 1 }}>
          <LoadingIndicator />
        </View>
      );
    }

    const data = query.viewer.posts.edges.map(({ node }) => node);

    return query ? (
      <PostList
        {...this.props}
        posts={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
        refresh={(callback) => {
          relay.refetchConnection(null, callback, { count: batchLoad });
        }}
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
            after: $cursor,
            beforeId: $postId,
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
    getVariables: ({ postId }, { count, cursor }) => ({
      count,
      cursor,
      postId,
    }),
    variables: { cursor: null },
    query: graphql`
      query MyPostListPaginationQuery (
        $count: Int!,
        $cursor: String,
        $postId: ID,
      ) {
        ...MyPostList_query
      }
    `,
  },
);
