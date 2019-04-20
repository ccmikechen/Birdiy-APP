import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectDetailSection from '../components/ProjectDetailSection';
import FollowPostView from '../components/FollowPostView';

class ProjectDetailFollowPostList extends Component {
  static propTypes = {
    project: PropTypes.shape({
      relatedPosts: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.object,
        })),
      }),
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
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
    const { project, relay } = this.props;
    const data = project.relatedPosts.edges.map(({ node }) => node);

    return data.length === 0 ? null : (
      <ProjectDetailSection title="跟著做">
        <FollowPostView
          {...this.props}
          posts={data}
          canLoadMore={relay.hasMore()}
          loadMore={this.loadMore}
        />
      </ProjectDetailSection>
    );
  }
}

export default createPaginationContainer(
  ProjectDetailFollowPostList,
  {
    project: graphql`
      fragment ProjectDetailFollowPostList_project on Project {
        relatedPosts(
          first: $relatedPostsCount,
          after: $relatedPostsCursor,
        ) @connection(key: "ProjectDetailFollowPostList_relatedPosts") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              thumbnail {
                image
              }
              author {
                image
                name
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
      props.project && props.project.relatedPosts
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      projectId: props.projectId,
      relatedPostsCount: count,
      relatedPostsCursor: cursor,
    }),
    variables: { relatedPostsCursor: null },
    query: graphql`
      query ProjectDetailFollowPostListPaginationQuery (
        $projectId: ID!,
        $relatedPostsCount: Int!,
        $relatedPostsCursor: String
      ) {
        project(id: $projectId) {
          ...ProjectDetailFollowPostList_project
        }
      }
    `,
  },
);
