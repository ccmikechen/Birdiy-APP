import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectList from '../components/ProjectList';
import UserProjectPopupMenu from '../components/UserProjectPopupMenu';

class UserProjectList extends Component {
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
    }).isRequired,
    batchLoad: PropTypes.number,
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func,
  };

  static defaultProps = {
    batchLoad: 5,
    onEditProject: () => {},
    onDeleteProject: () => {},
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  render() {
    const {
      query,
      relay,
      onEditProject,
      onDeleteProject,
    } = this.props;
    const data = query.viewer.projects.edges.map(({ node }) => node);

    return query ? (
      <ProjectList
        {...this.props}
        projects={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
        renderOptionButton={project => (
          <UserProjectPopupMenu
            onEditProject={() => onEditProject(project.id)}
            onDeleteProject={() => onDeleteProject(project.id)}
          />
        )}
      />
    ) : null;
  }
}

export default createPaginationContainer(
  UserProjectList,
  {
    query: graphql`
      fragment UserProjectList_query on RootQueryType {
        viewer {
          projects(
            first: $count,
            after: $cursor
          ) @connection(key: "UserProjectList_projects") {
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
      query UserProjectListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...UserProjectList_query
      }
    `,
  },
);
