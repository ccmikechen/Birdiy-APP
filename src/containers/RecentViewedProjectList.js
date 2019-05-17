import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';
import { View } from 'react-native';

import LoadingIndicator from '../components/LoadingIndicator';
import ProjectList from '../components/ProjectList';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

class RecentViewedProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        projects: PropTypes.shape({
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

    if (!query.viewer) {
      return (
        <View style={{ flex: 1 }}>
          <LoadingIndicator />
        </View>
      );
    }

    const data = query.viewer.projects.edges.map(({ node }) => node);

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
  RecentViewedProjectList,
  {
    query: graphql`
      fragment RecentViewedProjectList_query on RootQueryType {
        viewer {
          projects: viewedProjects(
            first: $count,
            after: $cursor
          ) @connection(key: "RecentViewedProjectList_projects") {
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
      query RecentViewedProjectListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...RecentViewedProjectList_query
      }
    `,
  },
);
