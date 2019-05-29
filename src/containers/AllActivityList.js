import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ActivityList from '../components/ActivityList';

import { DEFAULT_POST_BATCH_LOAD } from '../constants/defaults';

class AllActivityList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            project: PropTypes.object,
            post: PropTypes.object,
          }),
        })),
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

  loadMore = () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  getSections = () => {
    const { query } = this.props;

    return query.all.edges.map(({ node }) => {
      if (node.project) {
        return {
          type: 'project',
          data: node.project,
          createdAt: node.insertedAt,
        };
      }
      if (node.post) {
        return {
          type: 'post',
          data: node.post,
          createdAt: node.insertedAt,
        };
      }

      return { type: null };
    });
  };

  render() {
    const { query, relay, batchLoad } = this.props;

    return query ? (
      <ActivityList
        {...this.props}
        sections={this.getSections()}
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
  AllActivityList,
  {
    query: graphql`
      fragment AllActivityList_query on RootQueryType {
        all: allActivities(
          first: $count,
          after: $allCursor
        ) @connection(key: "AllActivityList_all") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              project {
                ...ProjectActivitySection_project
              }
              post {
                ...PostSection_post
              }
              insertedAt
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
      query AllActivityListPaginationQuery (
        $count: Int!,
        $allCursor: String
      ) {
        ...AllActivityList_query
      }
    `,
  },
);
