import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

class MyProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        projects: PropTypes.shape({
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
    const data = query && query.viewer.projects.edges.map(({ node }) => node);

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
  MyProjectList,
  {
    query: graphql`
      fragment MyProjectList_query on RootQueryType {
        viewer {
          projects(
            first: $count,
            after: $cursor
          ) @connection(key: "MyProjectList_projects") {
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
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.query && props.query.viewer.projects
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
      query MyProjectListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...MyProjectList_query
      }
    `,
  },
);
