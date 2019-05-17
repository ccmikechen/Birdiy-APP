import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

class NewestProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      newest: PropTypes.object,
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
      refetchConnection: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    batchLoad: DEFAULT_PROJECT_BATCH_LOAD,
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
    const data = query.newest.edges.map(({ node }) => node);

    return query ? (
      <ProjectList
        {...this.props}
        projects={data}
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
  NewestProjectList,
  {
    query: graphql`
      fragment NewestProjectList_query on RootQueryType {
        newest: allProjects(
          first: $count,
          after: $newestCursor,
          filter: $filter,
        ) @connection(key: "NewestProjectList_newest") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              ...ProjectSection_project
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.query && props.query.newest
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      newestCursor: cursor,
      filter: {
        name: props.keyword,
        categories: props.categories,
      },
    }),
    variables: { newestCursor: null },
    query: graphql`
      query NewestProjectListPaginationQuery (
        $count: Int!,
        $newestCursor: String,
        $filter: ProjectFilter,
      ) {
        ...NewestProjectList_query
      }
    `,
  },
);
