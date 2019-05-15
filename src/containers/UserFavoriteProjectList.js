import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

class UserFavoriteProjectList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      user: PropTypes.shape({
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
    const { query, relay } = this.props;
    const data = query.user.projects.edges.map(({ node }) => node);

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
  UserFavoriteProjectList,
  {
    query: graphql`
      fragment UserFavoriteProjectList_query on RootQueryType {
        user(id: $id) {
          projects: favoriteProjects(
            first: $count,
            after: $cursor
          ) @connection(key: "UserFavoriteProjectList_projects") {
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
      props.query && props.query.user.projects
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: ({ userId }, { count, cursor }) => ({
      count,
      cursor,
      id: userId,
    }),
    variables: { cursor: null },
    query: graphql`
      query UserFavoriteProjectListPaginationQuery (
        $count: Int!,
        $cursor: String,
        $id: ID!,
      ) {
        ...UserFavoriteProjectList_query
      }
    `,
  },
);
