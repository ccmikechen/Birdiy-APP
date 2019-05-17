import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

class HotestProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      hotest: PropTypes.object,
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
    const data = query.hotest.edges.map(({ node }) => node);

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
  HotestProjectList,
  {
    query: graphql`
      fragment HotestProjectList_query on RootQueryType {
        hotest: allProjects(
          first: $count,
          after: $hotestCursor,
          filter: $filter,
        ) @connection(key: "HotestProjectList_hotest") {
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
      props.query && props.query.hotest
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      hotestCursor: cursor,
      filter: {
        name: props.keyword,
        categories: props.categories,
      },
    }),
    variables: { hotestCursor: null },
    query: graphql`
      query HotestProjectListPaginationQuery (
        $count: Int!,
        $hotestCursor: String,
        $filter: ProjectFilter,
      ) {
        ...HotestProjectList_query
      }
    `,
  },
);
