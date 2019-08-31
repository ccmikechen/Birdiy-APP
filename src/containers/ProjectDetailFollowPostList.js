import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';
import i18n from 'i18n-js';

import ProjectDetailSection from '../components/ProjectDetailSection';
import FollowPostView from '../components/FollowPostView';

import { Tertiary } from '../constants/Colors';

class ProjectDetailFollowPostList extends Component {
  static propTypes = {
    project: PropTypes.shape({
      relatedPosts: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            thumbnail: PropTypes.shape({
              image: PropTypes.string,
            }),
            author: PropTypes.shape({
              id: PropTypes.string.isRequired,
              image: PropTypes.string,
              name: PropTypes.string.isRequired,
            }),
          }),
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
      <ProjectDetailSection
        title={i18n.t('project.sections.followingPosts')}
        style={{
          backgroundColor: '#fafafa',
          borderTopWidth: 1,
          borderColor: Tertiary(100),
        }}
      >
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
          after: $cursor,
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
                id
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
      cursor,
    }),
    variables: { cursor: null },
    query: graphql`
      query ProjectDetailFollowPostListPaginationQuery (
        $projectId: ID!,
        $relatedPostsCount: Int!,
        $cursor: String
      ) {
        project(id: $projectId) {
          ...ProjectDetailFollowPostList_project
        }
      }
    `,
  },
);
