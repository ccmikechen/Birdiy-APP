import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

class HotestProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      hotest: PropTypes.object,
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
    const data = query && query.hotest.edges.map(({ node }) => node);

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
  HotestProjectList,
  {
    query: graphql`
      fragment HotestProjectList_query on RootQueryType {
        hotest: allProjects(
          first: $count,
          after: $hotestCursor
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
    }),
    variables: { hotestCursor: null },
    query: graphql`
      query HotestProjectListPaginationQuery (
        $count: Int!,
        $hotestCursor: String
      ) {
        ...HotestProjectList_query
      }
    `,
  },
);
