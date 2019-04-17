import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

class NewestProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      newest: PropTypes.object,
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
    const data = query && query.newest.edges.map(({ node }) => node);

    return query ? (
      <ProjectList
        {...this.props}
        projects={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
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
          after: $newestCursor
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
    }),
    variables: { newestCursor: null },
    query: graphql`
      query NewestProjectListPaginationQuery (
        $count: Int!,
        $newestCursor: String
      ) {
        ...NewestProjectList_query
      }
    `,
  },
);
