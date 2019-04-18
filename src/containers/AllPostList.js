import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import PostList from '../components/PostList';

class AllPostList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.object,
        })),
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
    const data = query.all.edges.map(({ node }) => node);

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
  AllPostList,
  {
    query: graphql`
      fragment AllPostList_query on RootQueryType {
        all: allPosts(
          first: $count,
          after: $allCursor
        ) @connection(key: "AllPostList_all") {
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
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.query && props.query.all
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      allCursor: cursor,
    }),
    variables: { allCursor: null },
    query: graphql`
      query AllPostListPaginationQuery (
        $count: Int!,
        $allCursor: String
      ) {
        ...AllPostList_query
      }
    `,
  },
);
